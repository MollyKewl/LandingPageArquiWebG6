import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Comentarios } from '../../../models/Comentario';
import { Usuarios } from '../../../models/Usuarios';
import { Estilo } from '../../../models/Estilo';
import { EstiloUsuarioService } from '../../../services/estilousuario.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { EstiloService } from '../../../services/estilo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EstiloUsuario } from '../../../models/EstiloUsuario';

@Component({
  selector: 'app-creaeditaestilousuario',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideNativeDateAdapter()
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './creaeditaestilousuario.component.html',
  styleUrl: './creaeditaestilousuario.component.css'
})

export class CreaeditaestilousuarioComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  estilousuario: EstiloUsuario = new EstiloUsuario();
  id: number = 0;
  edicion: boolean = false;
  listausuarios:Usuarios[]=[];
  listaestilos:Estilo[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private euS: EstiloUsuarioService,
    private uS:UsuariosService,
    private eS:EstiloService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit():void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
//  idEstiloFav:number=0
 //fechaEstiloFav:Date=new Date(Date.now())
 //calificacion:number=0
 //usuario:Usuarios=new Usuarios()
 //estilo:Estilo=new Estilo()
    this.form=this.formBuilder.group({
      hcodigo: [''],
      hfecha: ['', Validators.required],
      hcalificacion: ['', Validators.required],
      husuario:['', Validators.required],
      hestilo:['', Validators.required],
    });
    this.uS.list().subscribe((data)=>{
      this.listausuarios=data;
  });
  this.eS.list().subscribe((data)=>{
    this.listaestilos=data;
});
  }

  insertar(): void {

    if (this.form.valid) {

      this.estilousuario.idEstiloFav = this.form.value.hcodigo;
      this.estilousuario.fechaEstiloFav = this.form.value.hfecha;
      this.estilousuario.calificacion = this.form.value.hcalificacion;
      this.estilousuario.usuario.idUsuario = this.form.value.husuario;
      this.estilousuario.estilo.idEstilo = this.form.value.hestilo;
      if(this.edicion){
        this.euS.update(this.estilousuario).subscribe((data) => {
          this.euS.list().subscribe(data => {
            this.euS.setList(data);
          });

        });
      } else{
        this.euS.insert(this.estilousuario).subscribe((data) => {
          this.euS.list().subscribe((data) => {
            this.euS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['estilousuarios']);
  }
  cancel(): void {
    this.router.navigate(['estilousuarios']);
  }

  init() {
    if (this.edicion) {
      this.euS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo:new FormControl(data.idEstiloFav),
          hfecha:new FormControl(data.fechaEstiloFav),
          hcalificacion:new FormControl(data.calificacion),
          husuario:new FormControl(data.usuario.idUsuario),
          hestilo:new FormControl(data.estilo.idEstilo),
        
        });
      });
    }
  }

}