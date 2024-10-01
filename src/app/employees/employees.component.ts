import { Component, OnInit } from '@angular/core';
import { Employee } from '../modele/employee.modele';
import { EmployeeService } from '../services/employee.service';
import { Departement } from '../modele/departement.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  employees?: Employee[] ; //un tableau de chînes de caractères
  departement?: Departement[] ;
  constructor(private employeeService: EmployeeService,public authService: AuthService) {  
    }
    supprimerEmployee(e: Employee)
    {
      //console.log(e);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.employeeService.supprimerEmployee(e.idEmployee ).subscribe(() => {
          console.log("employee supprimé");
          this.chargerEmployees();
          });
}
    ngOnInit() :void{
      this.chargerEmployees();
    }
    chargerEmployees(){
        this.employeeService.listeEmployee().subscribe(empls => {
        console.log(empls);
        this.employees = empls;
        });
        }
        
}
