import { Injectable } from '@angular/core';
import { Employee } from '../modele/employee.modele';
import { Departement } from '../modele/departement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DepartementWrapper } from '../modele/DepartementWrapped.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL: string = 'http://localhost:8081/employees/api';
  apiURLDep: string = 'http://localhost:8081/employees/dep';
  employee! : Employee;
  employees!: Employee[] ; //un tableau de chînes de caractères
  departements!: Departement[] 
  constructor(private http : HttpClient) {  
  
  }
  /*   this.departements = [ {idDep : 1, nomDep : "HR"},
      {idDep : 2, nomDep : "IT"}]; */
    /* this.employees=[{idEmployee : 1, nomEmployee : "GHARINAI moetez", salaire : 3000.600, dateEmbauche : new Date("01/14/2011"),departement : {idDep : 1, nomDep : "HR"}},
    {idEmployee : 2, nomEmployee : "HOSNI larnabout", salaire : 450, dateEmbauche : new Date("12/17/2010"),departement : {idDep : 2, nomDep : "IT"}},
    {idEmployee : 3, nomEmployee :"zamil Samsung", salaire : 900.123,dateEmbauche  : new Date("02/20/2020"),departement : {idDep : 1, nomDep : "HR"}}
     ];*/
    
    listeEmployee(): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.apiURL);
      }
     ajouterEmployee( empl: Employee):Observable<Employee>{
      return this.http.post<Employee>(this.apiURL, empl, httpOptions);
      }
      
      supprimerEmployee(id : number|undefined) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
        //ou Bien
        /* this.produits.forEach((cur, index) => {
        if(prod.idProduit === cur.idProduit) {
        this.produits.splice(index, 1);
        }
        }); */
        
        trierEmployees(){
          this.employees = this.employees.sort((n1,n2) => {
          if (n1.idEmployee! > n2.idEmployee!) {
          return 1;
          }
          if (n1.idEmployee! < n2.idEmployee!) {
          return -1;
          }
          return 0;
          });
          }
          
        consulterEmployee(id:number): Observable<Employee> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Employee>(url);
          }
          updateEmployee(e:Employee): Observable<Employee>
          {
          return this.http.put<Employee>(this.apiURL, e, httpOptions);
          }
          /*listeDepartements():Departement[] {
            return this.departements;
            }
            consulterDepartement(id:number): Departement{
              return this.departements.find(dep => dep.idDep == id)!;
              }*/
              listeDepartements():Observable<DepartementWrapper>{
                return this.http.get<DepartementWrapper>(this.apiURLDep);
                }
                rechercherParDepartement(idDep: number):Observable< Employee[]> {
                  const url = `${this.apiURL}/emplsdep/${idDep}`;
                  return this.http.get<Employee[]>(url);
                  }
                  rechercherParNom(nom: string):Observable< Employee[]> {
                    const url = `${this.apiURL}/emplsByName/${nom}`;
                    return this.http.get<Employee[]>(url);
                    }
                    ajouterDepartement( dep: Departement):Observable<Departement>{
                      return this.http.post<Departement>(this.apiURLDep, dep, httpOptions);
                      }
                      
            
}
