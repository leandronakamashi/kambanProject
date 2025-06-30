import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './components/task/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'task-dragdrop';
}
