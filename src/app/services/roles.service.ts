import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/Rol';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private url = `${base_url}/roles`;

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Rol[]>(this.url);
  }
}