import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../modele/employee.modele';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  nomEmployee!:string;
  employees! : Employee[];
  allEmployees! : Employee[];
  searchTerm!: string;

  constructor(private employeeService: EmployeeService) {  
  }
  ngOnInit(): void {
    this.employeeService.listeEmployee().subscribe(empls => {
      console.log(empls);
      this.allEmployees = empls;
      });
      

  }
  onKeyUp(filterText : string){
    this.employees = this.allEmployees.filter(item =>
    item.nomEmployee?.toLowerCase().includes(filterText));
    }
  rechercherEmpls(){
    this.employeeService.rechercherParNom(this.nomEmployee).
    subscribe(empls => {
    this.employees = empls;
    console.log(empls)});
    }
}
