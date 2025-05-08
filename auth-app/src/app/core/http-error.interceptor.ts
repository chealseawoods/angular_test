import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from './loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);
  const snackBar = inject(MatSnackBar);
  loader.show();
  return next(req).pipe(
    catchError((error) => {
      snackBar.open(error?.error?.message || 'An error occurred', 'Close', { duration: 3000 });
      return throwError(() => error);
    }),
    finalize(() => loader.hide())
  );
};
