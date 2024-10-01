import { Component, OnInit } from '@angular/core';
import { Employee } from '../modele/employee.modele';
import { Departement } from '../modele/departement.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-recherche-par-departement',
  templateUrl: './recherche-par-departement.component.html',
  styles: ``
})
export class RechercheParDepartementComponent implements OnInit {
  employees! : Employee[];
IdDepartement! : number;
departements! : Departement[];
constructor(private employeeService: EmployeeService) {  
}
  ngOnInit(): void {
    this.employeeService.listeDepartements().
subscribe(empls => {this.departements = empls._embedded.departements;
console.log(empls);
});


  }
  onChange() {
    this.employeeService.rechercherParDepartement(this.IdDepartement).
    subscribe(empls =>{this.employees=empls});
    }


}
