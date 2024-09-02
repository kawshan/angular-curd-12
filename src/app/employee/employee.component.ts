import {Component, OnInit} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption, MatSelect} from "@angular/material/select";
import {EmployeeModel} from "../model/employee.model";
import {EmployeeService} from "../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatFabButton,
    RouterLink,
    FormsModule,
    MatFormField,
    MatInput,
    MatRadioGroup,
    MatLabel,
    MatRadioButton,
    MatSelect,
    MatOption,
    MatIcon
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employee:EmployeeModel={
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""
  }

  ngOnInit(): void {}


  constructor(private employeeService: EmployeeService) {}

  saveEmployee(employeeForm: NgForm){
    this.employeeService.saveEmployee(this.employee).subscribe({
      next:(res:EmployeeModel) =>{
        console.log(res);
        employeeForm.reset();
    },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });
  }

  selectGender(gender:string){
    this.employee.employeeGender=gender;
}





}
