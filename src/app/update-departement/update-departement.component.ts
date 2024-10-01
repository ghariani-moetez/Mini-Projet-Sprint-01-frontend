import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from '../modele/departement.model';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styles: ``
})
export class UpdateDepartementComponent implements OnInit {
  @Input()
  ajout!:boolean;
  @Input() departement!: Departement ;
  @Output()
  departementUpdated = new EventEmitter<Departement>();
  idDep=1;
  nomDep:string= "HR"; 
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateDeprtement ",this.departement);
  }
  saveDepartement(){
    this.departementUpdated.emit(this.departement);
    }
}
