import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent} from './components/signup/signup.component';
import {DashboardComponent, NgbdNavBasic} from './components/dashboard/dashboard.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { WelcomContentComponent } from './components/welcom-content/welcom-content.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { CartComponent } from './components/dashboard/cart/cart.component';
import {HeaderComponent} from './components/dashboard/header/header.component';
import { MenProductComponent } from './components/dashboard/product/men-product/men-product.component';
import { ShoesComponent } from './components/dashboard/product/shoes/shoes.component';
import { AdminComponent } from './components/login/admin/admin.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {
  AllProductComponent,
} from './components/dashboard/product/all-product/all-product.component';
import {NgToastModule} from "ng-angular-popup";
import {WomenProductComponent} from "./components/dashboard/product/women-product/women-product.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    WelcomContentComponent,
    CartComponent,
    HeaderComponent,
    NgbdNavBasic,
    MenProductComponent,
    ShoesComponent,
    AdminComponent,
    AdminDashboardComponent,
    AllProductComponent,
    WomenProductComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    NgToastModule




  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '897225917211-rtgade3gurgkadj6tvb2kfljf29ic36l.apps.googleusercontent.com'
            )
          },

        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
