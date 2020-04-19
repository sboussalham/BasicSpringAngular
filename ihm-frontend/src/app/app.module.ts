import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateUserComponent,
    UsersListComponent,
    UserDetailComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
