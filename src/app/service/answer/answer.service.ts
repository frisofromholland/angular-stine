import { Injectable } from '@angular/core';

import { QuestionService } from '../question/question.service';
import { Result } from '../../beans/result';
import { Answer } from '../../beans/answer';

@Injectable()
export class AnswerService {

  constructor(private questionService: QuestionService) { }


  verifyAnswer(answer: Answer): Result {

    var answerValue = answer.value.trim();
    var correctAnswerValue = this.questionService.getCorrectAnswer(answer.id);

    if (answerValue == correctAnswerValue) {
      return new Result(1);
    } else {
      return new Result(0);
    }
  }

}
