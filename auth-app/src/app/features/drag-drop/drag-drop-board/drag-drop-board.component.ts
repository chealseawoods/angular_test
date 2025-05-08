import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface ProfileCard {
  id: number;
  name: string;
  designation: string;
  avatar: string;
}

@Component({
  selector: 'app-drag-drop-board',
  templateUrl: './drag-drop-board.component.html',
  styleUrl: './drag-drop-board.component.scss',
  standalone: false
})
export class DragDropBoardComponent {
  topRow: ProfileCard[] = [
    { id: 1, name: 'Alice', designation: 'Frontend Dev', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Bob', designation: 'Backend Dev', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Carol', designation: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'Dave', designation: 'QA Engineer', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }
  ];

  project1: ProfileCard[] = [];
  project2: ProfileCard[] = [];
  project3: ProfileCard[] = [];

  drop(event: CdkDragDrop<ProfileCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
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
