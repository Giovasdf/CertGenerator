import { VerifyComponent } from './verify/verify.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './dashboard/body/body.component';
import { OopsComponent } from './oops/oops.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'dashboard/:id', component: BodyComponent},
  {path:'verify/:id',component:VerifyComponent},
  {path: '**', component:OopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
