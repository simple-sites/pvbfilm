import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'product', component: ProductComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
