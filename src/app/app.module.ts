// import { HttpClient } from 'module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // built in library where we get ngModel directive from
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { RemoveComponent } from './components/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    RegisterComponent,
    AllComponent,
    FindComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
