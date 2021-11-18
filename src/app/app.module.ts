import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {RouterModule, Routes} from "@angular/router";
import {ProductCreateComponent} from "./products/product-create/product-create.component";
import {ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: 'products/create',
    component : ProductCreateComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
