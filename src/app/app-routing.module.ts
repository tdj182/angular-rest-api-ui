import { FindComponent } from './components/find/find.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { AllComponent } from './components/all/all.component';
import { RemoveComponent } from './components/remove/remove.component';
import {RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  // the path specifies http://localhost:4200/main
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'all', component: AllComponent},
  {path: 'find', component: FindComponent},
  {path: 'remove', component: RemoveComponent},
  {path: '**', component: MainComponent},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
