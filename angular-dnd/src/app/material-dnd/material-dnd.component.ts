import { Component } from '@angular/core';
import randWord from 'random-words';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-material-dnd',
  templateUrl: './material-dnd.component.html',
  styleUrls: ['./material-dnd.component.scss']
})
export class MaterialDndComponent {
  public words = randWord(15)
  constructor() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.words, event.previousIndex, event.currentIndex);
  }
}
