import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/foodPage/food-page.component';
import { CartPageComponent } from './components/pages/cartPage/cart-page.component';
import { LoginPageComponent } from './components/pages/loginPage/login-page.component';
import { RegisterPageComponent } from './components/pages/registerPage/register-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'foods/:id', component: FoodPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
