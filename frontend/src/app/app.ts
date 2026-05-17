import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogService } from './service/log.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  tollLogs: any[] = [];
  filteredLogs: any[] = [];

 searchText = '';
 searchType = 'licensePlate';

 vehicle = { 
  licensePlate:'',
  vehicleType:'',
  isOfficialGovernment: false
 };

 constructor(private logService: LogService)
 {
 }

 ngOnInit(): void {

  this.getLogs();
 }
  // Get all logs
  getLogs() 
  {
    this.logService.getLogs().subscribe((response: any)=> {

      this.tollLogs = response;
      this.filteredLogs = response;
  
    });
  }

  //add vehicle
  addVehicle()
  {
    // Convert license plate to uppercase before storing
    this.vehicle.licensePlate = this.vehicle.licensePlate.toUpperCase();

    this.logService.addLog(this.vehicle).subscribe((response: any)=> {

      //logs
      this.getLogs();

      //clear form
      this.vehicle = {
        licensePlate: '',
        vehicleType: '',
        isOfficialGovernment: false
      };
   
    });

  }

  //clear form
  clearForm() {
    this.vehicle = {
      licensePlate: '',
      vehicleType: '',
      isOfficialGovernment: false
    };
  }

  //search logs
  searchLogs(){
    if (this.searchType === 'licensePlate') {
      this.filteredLogs = this.tollLogs.filter(log => log.licensePlate.toLowerCase()
      .includes(this.searchText.toLowerCase())    
      );
    } else if (this.searchType === 'vehicleType') {
      this.filteredLogs = this.tollLogs.filter(log => log.vehicleType.toLowerCase()
      .includes(this.searchText.toLowerCase())    
      );
    }
  }
  
}
