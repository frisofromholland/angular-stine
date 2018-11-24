import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import { MessagesService } from './service/messages/messages.service';
import { QuestionService } from './service/question/question.service';
import { AnswerService } from './service/answer/answer.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { QuestionComponent } from './question/question.component';
import { ReadComponent } from './read/read.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    QuestionComponent,
    ReadComponent,
    CalculateComponent,
    ButtonsComponent,
  ],
  providers: [MessagesService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
