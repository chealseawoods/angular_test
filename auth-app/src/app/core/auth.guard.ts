import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  
  // Check if we're in the browser environment
  if (isPlatformBrowser(platformId)) {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    }
  }
  
  // If we're not in the browser or no user is found, redirect to login
  router.navigate(['/auth/login']);
  return false;
};
