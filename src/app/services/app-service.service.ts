import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  static headers(token): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
  }


  constructor(private http: HttpClient) {
  }

  post(url: string, data: any, token?: any) {
    return this.http.post<any>(`${environment.API_ENDPOINT + url}`, data, {headers: AppService.headers(token)});
  }

  get(url: string, token?: any) {
    return this.http.get<any>(`${environment.API_ENDPOINT + url}`, {headers: AppService.headers(token)});
  }

  put(url: string, data: any, token?: any) {
    return this.http.put<any>(`${environment.API_ENDPOINT + url}`, data, {headers: AppService.headers(token)});
  }

  delete(url: string, token?: any) {
    return this.http.delete<any>(`${environment.API_ENDPOINT + url}`, {headers: AppService.headers(token)});
  }



}
