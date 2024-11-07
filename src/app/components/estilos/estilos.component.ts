import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ListarestiloComponent } from './listarestilos/listarestilos.component';

@Component({
  selector: 'app-estilos',
  standalone: true,
  imports: [RouterModule, ListarestiloComponent],
  templateUrl: './estilos.component.html',
  styleUrl: './estilos.component.css'
})
export class EstilosComponent {
  constructor(public route: ActivatedRoute) { }

}