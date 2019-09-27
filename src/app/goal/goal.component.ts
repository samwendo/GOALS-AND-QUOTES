import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  Goals: any;
  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon'),
    new Goal(4, 'Get Dog Food', 'Pupped likes expensive snacks'),
    new Goal(5, 'Solve math homework', 'Damn Math'),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord'),
  ];



  goal: Goal[];
  alertService: AlertService;
  quote: Quote;

  Goal: typeof Goal;
  goToUrl(id) {
    this.router.navigate(['/goals', id]);
  }
  deleteGoal(index) {
      const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

      if (toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMe('Goal has been deleted');
      }
    }
  addNewGoal(goal) {
    const goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
    constructor(goalService: GoalService, alertService: AlertService, private quoteService: QuoteRequestService, private router: Router) {
    this.Goal = goalService.getGoals();
    this.alertService = alertService;
  }


  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  ngOnInit() {

    this.quoteService.quoteRequest(),
      this.quote = this.quoteService.quote;
    interface ApiResponse {
      author: string;
      quote: string;

    }

    // this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data => {
    //    // Succesful API request
    //    this.quote = new Quote(data.author, data.quote);
    //  }, err => {
    //    this.quote = new Quote('Winston Churchill', 'Never never give up!');
    //    console.log('An error occurred');
    //  });

  }
}



