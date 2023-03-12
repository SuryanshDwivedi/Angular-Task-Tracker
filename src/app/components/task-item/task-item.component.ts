import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Data } from 'src/app/Data';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
  task!: Data;
  faTimes = faTimes
  @Output() onDeleteTask: EventEmitter<Data> = new EventEmitter()
  @Output() onDoubleClick: EventEmitter<Data> = new EventEmitter()


  constructor(private taskService: TaskService) { }

  onDelete = (task: Data) => {
    console.log(task.id)
    this.onDeleteTask.emit(task)
  }
  onDblClick = (task: Data)=>{
    this.onDoubleClick.emit(task);
  }

}
