import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RechercheParDepartementComponent } from './recherche-par-departement/recherche-par-departement.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeeGuard } from './employee.guard';

const routes: Routes = [
  {path: 'employees', component:EmployeesComponent},
  {path: 'add-employee', component: AddEmployeeComponent, canActivate:[EmployeeGuard]},
  {path:'update-employee/:id', component: UpdateEmployeeComponent},
  {path:'rechercheParDepartement', component: RechercheParDepartementComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeDepartements", component: ListeDepartementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  { path: "", redirectTo: "employees", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
