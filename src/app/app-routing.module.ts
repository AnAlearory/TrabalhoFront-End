import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InscrevaseComponent } from './pages/inscrevase/inscrevase.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ConhecaComponent } from './pages/conheca/conheca.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full' },

	{path: 'inscrevase', component: InscrevaseComponent},
	{path: 'contato', component: ContatoComponent},
	{path: 'conheca', component: ConhecaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
