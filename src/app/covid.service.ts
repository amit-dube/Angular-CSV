import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  /**
    *Http base url
  */
  private apiURL = `http://localhost/api`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /*
    * To get all the records
  */
    getInfo() {
    return this.http.get(this.apiURL +'/csvapi.php');
    }

  /**
   * To save the details
  */
  addCsvData(model: any): Observable<any> {
      return this.http.post(this.apiURL+'/csvpostapi.php', model);
  }

  /**
   * To Edit the details
   */
  editCsvData(model: any): Observable<any>{
    return this.http.post(this.apiURL +'/csveditapi.php', model);
  }

  /**
   * Return the csv row record as per id
   */
  find(id: any): Observable<any> {
    return this.http.get(this.apiURL +'/csvapi.php?id='+id);
  }

  /**
	 * To delete the record
	 * id
	*/
  deleteData(id: number): Observable<any> {
    return this.http.delete(this.apiURL +'/csv-delete-api.php?id=' + id);
  }

}
