import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PasswordStrengthBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
