import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Usuarios } from '../models/Usuarios';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Usuarios[]>();

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Usuarios[]>(this.url);
  }
    
  insert(usu: Usuarios) {
    return this.http.post(this.url, usu);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Usuarios[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number){
    return this.http.get<Usuarios>(`${this.url}/${id}`)
  }

  update(usu: Usuarios){
    return this.http.put(this.url, usu)
  }
}
