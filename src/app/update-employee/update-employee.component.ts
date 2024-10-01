import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../modele/employee.modele';
import { Departement } from '../modele/departement.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: ``
})
export class UpdateEmployeeComponent implements OnInit{
  currentEmployee = new Employee();
  departements!: Departement[];
  updatedDepId? : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private employeeService: EmployeeService) { }
    ngOnInit(): void {
      this.employeeService.listeDepartements().
      subscribe(cats => {console.log(cats);
      this.departements = cats._embedded.departements;
      }
      );
      this.employeeService.consulterEmployee(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentEmployee = prod;
      this.updatedDepId = this.currentEmployee.departement?.idDep;
      } ) ;
      }
  updateEmployee()
  {
    this.currentEmployee.departement = this.departements.
 find(dep => dep.idDep == this.updatedDepId)!;
     this.employeeService.updateEmployee(this.currentEmployee).subscribe(prod => {
    this.router.navigate(['employees']); }
    );
    
}
}
