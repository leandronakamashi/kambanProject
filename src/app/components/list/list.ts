import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CdkAccordionModule, CdkDropList, CdkDrag],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() todo: string[] = [];
  @Input() connectedList: string[] = [];
  @Input() idList: string = '';
  @Input() dropListName: any = '';
  drop(event: CdkDragDrop<string[]>) {
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
