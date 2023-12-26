import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { BodyComponent } from './dashboard/body/body.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CourseComponent } from './dashboard/course/course.component';
import { OopsComponent } from './oops/oops.component';
import { CertificationComponent } from './dashboard/certification/certification.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    BodyComponent,
    UsersComponent,
    CourseComponent,
    OopsComponent,
    CertificationComponent,
    VerifyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
