import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private apiURL = `http:localhost/api`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  //csvData = './assets/data.csv';

  /*getInfo() {
     return this.http.get(this.csvData, {responseType: 'text'});
    }*/


    getInfo() {
    return this.http.get(this.apiURL +'/csvapi.php?fl' +'=get');
    }


  deleteData(id: number): Observable<any> {
      return this.http.delete(this.apiURL +'/csvapi.php?fl' +'=delete&id=' + id);
    }

  addCsvData(model: any): Observable<any> {
      return this.http.post(this.apiURL+'/csvpostapi.php', model);
  }

}
