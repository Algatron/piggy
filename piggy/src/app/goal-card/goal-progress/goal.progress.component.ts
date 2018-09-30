import { Input, OnInit } from "@angular/core";
import { IGoal } from "../../goal.model";

export class GoalProgress implements OnInit {

  @Input()
  public goal: IGoal;

  ngOnInit(): void {
    
  }

}