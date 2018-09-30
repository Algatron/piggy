import { Component, Input, OnInit } from "@angular/core";
import { IGoal } from "../goal.model";

@Component({
  selector: "goal-card",
  templateUrl: 'goal.card.component.html'
})
export class GoalCardComponent implements OnInit {

  @Input()
  public goal: IGoal;
  
  ngOnInit(): void {
  }

  public getPercentComplete(): string {
    return ((this.goal.transactions.total / this.goal.targetAmount) * 100).toString();
  }


}