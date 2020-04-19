import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get(this.baseUrl, {headers, responseType: 'text' as 'json'});
  }

  getUsers(): Observable<any> {
    const username = 'java';
    const password = 'pass';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get(this.baseUrl + '/getUsers', {headers});
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<any> {
    const username = 'java';
    const password = 'pass';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.post(this.baseUrl + '/createUser', user, {headers});
  }

  /* updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  } */

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
