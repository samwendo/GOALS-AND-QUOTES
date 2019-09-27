import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

    @Input() goal: Goal;
    @Output() isComplete = new EventEmitter<boolean>();
  goals: any;
    goalComplete(complete: boolean) {
      this.isComplete.emit(complete);
    }
    completeGoal(isComplete, index) {
      if (isComplete) {
        this.goals.splice(index, 1);
      }
     }
     goalDelete(complete: boolean) {
      this.isComplete.emit(complete);
    }

  constructor(private route: ActivatedRoute, private service: GoalService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.goals = this.service.getGoal(id);
  }

}
