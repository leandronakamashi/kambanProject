import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [CdkDropList, CdkDrag, ReactiveFormsModule, CdkAccordionModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  done = [
    { tirulo: 'Get up', descricao: 'descricao da tarefa' },
    { titulo: 'Brush teeth', descricao: 'descricao de brush teeth' },
    { titulo: 'Take a shower', descricao: 'descricao do take shower' },
    { titulo: 'Check e-mail', descricao: 'descricao de check e-mail' },
    { titulo: 'Walk dog', descricao: 'descricao de walk dog' },
  ];
  doing = [{ titulo: '', descricao: '' }];
  todo = [
    { titulo: 'Get to work', descricao: 'descricao de get to work' },
    {
      titulo: 'Pick up groceries',
      descricao: 'descricao de pick up groceries',
    },
    { titulo: 'Go home', descricao: 'descricao de go home' },
    { titulo: 'Fall asleep', descricao: 'descricao de fall asleep' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tarefa: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  adicionarTarefa() {
    console.log('clicou');

    this.todo.push({
      titulo: this.form.get('tarefa')?.value,
      descricao: this.form.get('descricao')?.value,
    });
    this.form.reset();
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
