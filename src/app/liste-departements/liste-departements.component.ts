import { Component, OnInit } from '@angular/core';
import { Departement } from '../modele/departement.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-liste-departements',
  templateUrl: './liste-departements.component.html',
  styles: ``
})
export class ListeDepartementsComponent implements OnInit{
  departements! : Departement[];
  updatedDep:Departement = {"idDep":0,"nomDep":""};
  dep !: Departement;
  ajout:boolean=true;

  constructor(private employeeService : EmployeeService) { }
  ngOnInit(): void {
  this.employeeService.listeDepartements().
  subscribe(deps => {this.departements = deps._embedded.departements;
  console.log(deps);
  });
  }
  chargerDepartemnts  (){
    this.employeeService.listeDepartements().
    subscribe(deps => {this.departements = deps._embedded.departements;
    console.log(deps);
    })}
    departementUpdated(dep:Departement){
      console.log("dep updated event",dep);
      this.employeeService.ajouterDepartement(dep).
       subscribe( ()=> this.chargerDepartemnts());
  }
  updateDep(dep:Departement) {
    this.updatedDep=dep;
    this.ajout=false; 
    }
}
