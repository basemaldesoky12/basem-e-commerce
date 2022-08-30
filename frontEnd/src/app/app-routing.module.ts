import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllCustomersComponent } from './pages/view-all-customers/view-all-customers.component';
import { ViewAllProductsAdminComponent } from './pages/view-all-products-admin/view-all-products-admin.component';

const routes: Routes = [
  {path : 'register', component : SignUpComponent},
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'adminHome', component : AdminHomeComponent},
  {path: 'viewProductsAdmin', component : ViewAllProductsAdminComponent},
  {path : 'viewallcustomers',component : ViewAllCustomersComponent},
  {path : 'cart/:id',component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
