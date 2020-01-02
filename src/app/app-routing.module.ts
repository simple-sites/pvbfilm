import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
