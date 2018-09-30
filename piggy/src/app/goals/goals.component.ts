import { Component } from "@angular/core";
import { IGoal } from "../goal.model";

@Component({
   selector: 'goals-component',
   templateUrl: 'goals.component.html'
})
export class GoalsComponent {

   public data: { goals: IGoal[] };

   constructor() {
      this.data = {
         goals: [
            {
               uid: "0",
               name: "basement bathroom",
               description: `1) Gut downstairs basement\n2) Move wall over to make space for a shower`,
               targetAmount: 10000,
               transactions: {
                 total: 6750
               }
            }, {
               uid: "1",
               name: "new house siding",
               description: `Redo all the siding on exterior of the house`,
               targetAmount: 3000,
               transactions: {
                 total: 300
               }
            }, {
               uid: "2",
               name: "Mexico trip",
               description: `Trip to mehico!!!`,
               targetAmount: 4000,
               transactions: {
                 total: 3500
               }
            }
         ]
      }
   }

   public dragStart(event: DragEvent, goal: IGoal) {
     function onDrop(data: any) {
       goal.category = data;
     }
    event.dataTransfer.setData('text', `EVENT_DROP_GOAL:${goal.uid}`);
   }



}