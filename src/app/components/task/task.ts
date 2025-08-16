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
  done = [{ tirulo: '', descricao: '' }];
  doing = [{ titulo: '', descricao: '' }];
  todo = [{ titulo: '', descricao: '' }];

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
