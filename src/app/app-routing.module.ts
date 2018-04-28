import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from "./contato/contato.component";
import { ServicoComponent } from "./servico/servico.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'servico', component: ServicoComponent },
{ path: 'contato', component: ContatoComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}