import { Component } from '@angular/core';
import {Subscription} from 'rxjs'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker'
  showAddTask :boolean = false;
  subscription : Subscription | undefined;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=>{
      this.showAddTask = value
    })
  }

  toggleAdd= ()=>{
    this.uiService.toggleAddTask();
  }
}
