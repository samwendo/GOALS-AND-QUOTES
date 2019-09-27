import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {



  getGoals() {
    return Goal;
  }

  getGoal(id) {
    for (const goal of Goal) {
      if (goal.id === id) {
        return goal;
      }
    }
  }



  constructor() { }
}
