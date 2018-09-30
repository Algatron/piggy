import { Component, Output, OnInit } from "@angular/core";

interface ICategory {
  // uid
  name: string,
  goals: number,
  color?: string,
  // workspace: null,
  selected?: boolean,
  dragging?: boolean
}

@Component({
  selector: "goal-categories",
  templateUrl: "goal.categories.component.html"
})
export class GoalCategoriesComponent implements OnInit {

  public categories: ICategory[] = [
    {
      name: "All",
      goals: 10,
    }, {
      name: "Renovations",
      goals: 10,
    }, {
      name: "Fun stuff",
      goals: 10,
    }, {
      name: "Big expenses",
      goals: 10,
    }, {
      name: "Vacations",
      goals: 10,
    }, {
      name: "Uncategorized",
      goals: 10,
    }
  ]

  ngOnInit(): void {
    this.generateStats();
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public dragOver(event: DragEvent, cat: ICategory) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    cat.dragging = true;
  }

  public onDrop(event: DragEvent, cat: ICategory) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    cat.dragging = false;
  }
  
  public dragEnter(event: DragEvent, cat: ICategory) {
    event.preventDefault();
    // cat.dragging = true;
  }
  
  public dragLeave(event: DragEvent, cat: ICategory) {
    event.preventDefault();
    cat.dragging = false;
   }

  private generateStats(): void {
    let total = 0;
    this.categories.forEach((element, index) => {
      element.color = this.getRandomColor();
      if (index !== 0) {
        const numGoals = Math.floor(Math.random() * 6) + 1;
        total += numGoals;
        element.goals = numGoals;
        element.selected = Math.random() < 0.5 
      }
    });
    this.categories[0].goals = total;
  }

}