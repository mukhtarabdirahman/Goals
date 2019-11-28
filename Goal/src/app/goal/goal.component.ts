import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[]=[
    new Goal(1,'Watch finding Nemo','its animation', new Date(2019,10,10)),
    new Goal(2, 'Buy cookies','i have to buy chocolate', new Date(2019,11,6)), 
    new Goal(3, 'Get new phone case','i have to get iphone x', new Date(2019,11,25)),
    new Goal(4,'Playing fifa','playing fifa 20', new Date(2019,12,1)),
    new Goal(5,'coding','learing to code Angular', new Date(2019,12,2)),
    new Goal(6,'Sleeping','i want to sleep now', new Date(2019,12,4)),
    new Goal(7,'watching GOT','Watching the latest Episode', new Date(2019,12,12)),
    new Goal(8,'Texting','texting my baby girl', new Date(2020,1,1))
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {}
    
  }


