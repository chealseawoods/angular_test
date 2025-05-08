import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-infinite-scroll-gallery',
  templateUrl: './infinite-scroll-gallery.component.html',
  styleUrl: './infinite-scroll-gallery.component.scss',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule]
})
export class InfiniteScrollGalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  images: string[] = [];
  loading = false;
  pageContentElement: HTMLElement | null = null;
  scrollHandler: (() => void) | null = null;
  
  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit() {
    this.loadImages(); // Load initial images
  }
  
  ngAfterViewInit() {
    // Find the page-content container after view is initialized
    setTimeout(() => {
      this.setupScrollListener();
    }, 300);
  }
  
  ngOnDestroy() {
    // Clean up scroll event listener when component is destroyed
    this.removeScrollListener();
  }
  
  setupScrollListener() {
    this.pageContentElement = document.querySelector('.page-content');
    
    if (this.pageContentElement) {
      // Create bound handler function that we can later remove
      this.scrollHandler = this.onScroll.bind(this);
      this.pageContentElement.addEventListener('scroll', this.scrollHandler);
      console.log('Scroll listener attached to page-content element');
    } else {
      // Fall back to window scroll if page-content not found
      this.scrollHandler = this.onScroll.bind(this);
      window.addEventListener('scroll', this.scrollHandler);
      console.log('Scroll listener attached to window');
    }
  }
  
  removeScrollListener() {
    if (this.scrollHandler) {
      if (this.pageContentElement) {
        this.pageContentElement.removeEventListener('scroll', this.scrollHandler);
      } else {
        window.removeEventListener('scroll', this.scrollHandler);
      }
    }
  }
  
  onScroll() {
    if (this.loading) return;
    
    if (this.pageContentElement) {
      // For scrolling in the page-content element
      const element = this.pageContentElement;
      const scrollPosition = element.scrollTop + element.clientHeight;
      const scrollThreshold = element.scrollHeight - 200;
      
      if (scrollPosition >= scrollThreshold) {
        console.log('Loading more images from page content scroll');
        this.loadImages();
      }
    } else {
      // For scrolling on the window
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollThreshold = document.documentElement.scrollHeight - 200;
      
      if (scrollPosition >= scrollThreshold) {
        console.log('Loading more images from window scroll');
        this.loadImages();
      }
    }
  }

  loadImages() {
    if (this.loading) return;
    
    this.loading = true;
    console.log('Loading images...');
    
    this.http.get<any>('https://dog.ceo/api/breeds/image/random/5').subscribe({
      next: (res) => {
        this.images = this.images.concat(res.message);
        console.log(`Loaded ${res.message.length} new images. Total: ${this.images.length}`);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading images:', err);
        this.loading = false;
      }
    });
  }
}
