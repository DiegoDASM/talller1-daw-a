import { Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

export const routes: Routes = [

    {path: '', redirectTo: 'cuerpo',pathMatch: 'full'},
    {path: 'agregar', component: AgregarComponent},
    {path: 'cuerpo', component: CuerpoComponent},
    {path: '**', redirectTo: 'cuerpo', pathMatch: 'full'}

];
