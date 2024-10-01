import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParDepartementComponent } from './recherche-par-departement/recherche-par-departement.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    RechercheParDepartementComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeDepartementsComponent,
    UpdateDepartementComponent,
    LoginComponent,
    ForbiddenComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
