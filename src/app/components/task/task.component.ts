import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Data } from 'src/app/Data';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  data: Data[] = []
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getData().subscribe((task) => {
      console.log(task)
      this.data = task;
    })
  }

  deleteTask = (task: Data)=>{
    this.taskService.deleteData(task).subscribe(()=>{
      this.data = this.data.filter((e)=>e.id !==task.id)
    })
  }

  onToggle=(task : Data)=>{
    task.reminder = !task.reminder;
    this.taskService.updateData(task).subscribe();
  }

  onAddTask = (task : Data)=> {
    this.taskService.addData(task).subscribe((ele: Data)=> {
      this.data.push(ele)
    })
  }

}
