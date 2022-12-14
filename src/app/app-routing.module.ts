import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import {HomeComponent} from './pages/home/home.component'
import { ListingsComponent } from './pages/listings/listings.component';
const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'listings',component:ListingsComponent},
   {path:'details',component:DetailsComponent},
   {path:'cart',component:CartComponent},
   {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
