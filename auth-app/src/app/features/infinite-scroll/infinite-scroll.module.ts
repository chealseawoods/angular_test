import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollGalleryComponent } from './infinite-scroll-gallery/infinite-scroll-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '', component: InfiniteScrollGalleryComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    InfiniteScrollGalleryComponent // Import the standalone component instead of declaring it
  ]
})
export class InfiniteScrollModule { }
