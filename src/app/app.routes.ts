import { Routes } from '@angular/router';
import { CreaeditaformasComponent } from './components/formas/creaeditaformas/creaeditaformas.component';
import { FormasComponent } from './components/formas/formas.component';
import { RolesComponent } from './components/roles/roles.component';
import { CreaeditarolesComponent } from './components/roles/creaeditaroles/creaeditaroles.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { CreaeditatiposComponent } from './components/tipos/creaeditatipos/creaeditatipos.component';
import { RostroComponent } from './components/rostro/rostro.component';
import { CreaeditarostroComponent } from './components/rostro/creaeditarostro/creaeditarostro.component';
import { LandingComponent } from './components/landing/landing.component';
import { EstiloComponent } from './components/estilo/estilo.component';
import { CreaeditaestiloComponent } from './components/estilo/creaeditaestilo/creaeditaestilo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ConocenosComponent } from './components/landing/conocenos/conocenos.component';
import { EstilosdiComponent } from './components/landing/estilosdi/estilosdi.component';
import { WebcamComponent } from './components/landing/webcam/webcam.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landin',
    pathMatch: 'full',
  },
  {
    path: 'landin',
    component: LandingComponent,
    children: [
      {
        path: 'webcam',
        component: WebcamComponent,
      },
      {
        path: 'estilosdi',
        component: EstilosdiComponent,
      },
      {
        path: 'conocenos',
        component: ConocenosComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
  },
  {
    path: 'formas',
    component: FormasComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditaformasComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditaformasComponent,
      },
    ],
  },
  {
    path: 'roles',
    component: RolesComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditarolesComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditarolesComponent,
      },
    ],
  },
  {
    path: 'tipos',
    component: TiposComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditatiposComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditatiposComponent,
      },
    ],
  },
  {
    path: 'rostros',
    component: RostroComponent,
    children:[
      {
        path:'nuevo',
        component: CreaeditarostroComponent
      },
      {
        path: 'ediciones/:id',
        component: CreaeditarostroComponent
      }
    ]
  },
  {
    path: 'estilos',
    component: EstiloComponent,
    children:[
      {
        path:'nuevo',
        component: CreaeditaestiloComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditaestiloComponent,
      }
    ]
  },
  {
    path: 'item',
    component: CreaeditaestiloComponent,
    children:[
      {
        path:'nuevo',
        component: CreaeditaestiloComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditaestiloComponent,
      }
    ]
  },
];
