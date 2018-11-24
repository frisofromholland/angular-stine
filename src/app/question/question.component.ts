import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../beans/question';
import { Answer } from '../beans/answer';
import { Result } from '../beans/result';

import { QuestionService } from '../service/question/question.service';
import { AnswerService } from '../service/answer/answer.service';
import { MessagesService } from '../service/messages/messages.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() answer: Answer;
  question: Question;
  result: Result;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.answer = new Answer(1, null)
    this.question = this.questionService.newQuestion(0);
  }

  verify(answer: Answer): void {
    this.result = this.answerService.verifyAnswer(answer);
    this.messageService.addMessage(this.result);

  }

  newQuestion(): void {
    if (this.result.code > 0) {
      this.question = this.questionService.newQuestion(this.question.id);
      this.answer = new Answer(this.question.id, null);
    } else {
      this.answer.value = null;
    }
  }

}
