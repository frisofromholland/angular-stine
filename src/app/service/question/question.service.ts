import { Injectable } from '@angular/core';
import { Question } from '../../beans/question';


export const QUESTIONS: Question[] = [
  { id: 1, question: 'vraag 1' },
  { id: 2, question: 'vraag 2' },
  { id: 3, question: 'vraag 3' },
  { id: 4, question: 'vraag 4' },
  { id: 5, question: 'vraag 5' },
  { id: 6, question: 'vraag 6' },
  { id: 7, question: 'vraag 7' },
  { id: 8, question: 'vraag 8' },
  { id: 9, question: 'vraag 9' },
  { id: 10, question: 'vraag 10' }
];


export const ANSWERS: Map<number, String> = new Map([
  [1, '1'],
  [2, '2'],
  [3, '3'],
  [4, '4'],
  [5, '5'],
  [6, '6'],
  [7, '7'],
  [8, '8'],
  [9, '9'],
  [10, '10']
]);

@Injectable()
export class QuestionService {


  constructor() { }

  newQuestion(lastquestion: number): Question {

    if (QUESTIONS[lastquestion] != null) {
      return QUESTIONS[lastquestion];
    } else {
      return QUESTIONS[0];
    }
  }

  getCorrectAnswer(questionId: number): String {
    if (ANSWERS.get(questionId) != null) {
      return ANSWERS.get(questionId);
    } else {
      return 'XXXXXXXXXXXXXXxxxxxxxxxxxxxxx_________RRRRRRRRRRRRRRRRRRTTTTTT$$$$$%%%%%%%%%%';
    }
  }

}
