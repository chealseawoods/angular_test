import { Component, OnInit, ChangeDetectorRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Router, NavigationEnd } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule
  ],
  animations: [
    trigger('sidebarState', [
      state('expanded', style({
        width: '250px',
      })),
      state('collapsed', style({
        width: '70px',
      })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  sidebarExpanded = true;
  
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check if sidebar state is saved in localStorage
      const savedState = localStorage.getItem('sidebarState');
      if (savedState) {
        this.sidebarExpanded = savedState === 'expanded';
      }
    }
    
    // Subscribe to router events to fix layout on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Force change detection to update layout
      this.cdr.detectChanges();
    });
  }
  
  ngAfterViewInit(): void {
    // Fix initial layout rendering
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  toggleSidebar(): void {
    this.sidebarExpanded = !this.sidebarExpanded;
    
    // Save state to localStorage for persistence if in browser
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('sidebarState', this.sidebarExpanded ? 'expanded' : 'collapsed');
    }
    
    // Force change detection
    this.cdr.detectChanges();
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
    this.router.navigate(['/auth/login']);
  }
}