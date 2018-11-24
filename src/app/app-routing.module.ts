import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { ReadComponent } from './read/read.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ButtonsComponent }, 
  { path: 'write', component: QuestionComponent },
  { path: 'read', component: ReadComponent },
  { path: 'calculate', component: CalculateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
