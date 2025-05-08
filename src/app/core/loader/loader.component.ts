import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule]
})
export class LoaderComponent {
  loading$;
  constructor(private loaderService: LoaderService) {
    this.loading$ = this.loaderService.loading$;
  }
}
