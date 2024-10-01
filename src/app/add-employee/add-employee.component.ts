import { Component, OnInit } from '@angular/core';
import { Employee } from '../modele/employee.modele';
import { EmployeeService } from '../services/employee.service';
import { Departement } from '../modele/departement.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {

  newEmployee=new Employee();
  message?:string ;
  departements!: Departement[] ;
  newIdDep! : number;
  newDepartement! : Departement;
  constructor(private employeeService: EmployeeService,
    private router :Router
  ) { }
  ngOnInit(): void {
    this.employeeService.listeDepartements().
subscribe(deps => {this.departements = deps._embedded.departements;
console.log(deps);
});

  //this.departements = this.employeeService.listeDepartements();
  } 
  addEmployee(){
    this.newEmployee.departement = this.departements.find(dep => dep.idDep == this.newIdDep)!;
    this.employeeService.ajouterEmployee(this.newEmployee)
    .subscribe(empl => {
    console.log(empl);

  //  console.log(this.newEmployee);
  //  this.newDepartement = this.employeeService.consulterDepartement(this.newIdDep);
    //this.newEmployee.departement = this.newDepartement;
  //  this.employeeService.ajouterEmployee(this.newEmployee);
    //this.message="Employee : "+this.newEmployee.nomEmployee+"ajout avec succées.";
  this.router.navigate(['employees']);

    });
  }}
