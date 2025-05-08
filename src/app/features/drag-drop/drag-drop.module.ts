import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragDropBoardComponent } from './drag-drop-board/drag-drop-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: DragDropBoardComponent },
];

@NgModule({
  declarations: [
    DragDropBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatCardModule
  ]
})
export class DragDropFeatureModule { }
