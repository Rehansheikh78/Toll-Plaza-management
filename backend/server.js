const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const tollLogs = [];

// GET /logs: Fetch all toll records
app.get("/logs", (req, res) => {
    res.status(200).json(tollLogs);
});

// POST /logs: Receive a new vehicle entry
app.post("/logs", (req, res) => {

    try {

        const {vehicleType, licensePlate,isOfficialGovernment} = req.body;

        // Validation
        if (!licensePlate || !vehicleType) {
            return res.status(400).json({
                message: "License Plate and Vehicle Type are required"
            });
        }

        // Vehicle type checking
        if ( vehicleType !== "Car" && vehicleType !== "Truck" && vehicleType !== "Motorcycle") 
        {
            return res.status(400).json({
                message: "Invalid Vehicle Type"
            });
        }

        let tollfee = 0;

        // Toll fee calculate
        if (!isOfficialGovernment) 
        {
            if (vehicleType === "Car")
                tollfee = 5;

            else if (vehicleType === "Motorcycle")
                tollfee = 2;

            else if (vehicleType === "Truck")
                tollfee = 10;
        }

        // New log object
        const newlogs = {
            id: tollLogs.length + 1,
            licensePlate,
            vehicleType,
            isOfficialGovernment: isOfficialGovernment || false,
            tollfee,
            status: "Paid",
            timestamp: new Date()
        };

        // Store data
        tollLogs.push(newlogs);

        // Response
        res.status(201).json({
            message: "Vehicle entry added successfully",
            data: newlogs
        });

    }
    catch (error) 
    {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }

});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port no. ${PORT}`);
});