import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  standalone: false
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotForm.invalid) return;
    this.loading = true;
    const formValue = this.forgotForm.value;
    this.http.post<any>('https://second-brain-web.onrender.com/api/auth/forgot-password', formValue)
      .subscribe({
        next: () => {
          this.snackBar.open('Password reset link sent!', 'Close', { duration: 3000 });
          this.loading = false;
        },
        error: () => {
          this.snackBar.open('Failed to send reset link.', 'Close', { duration: 3000 });
          this.loading = false;
        }
      });
  }

  get f() { 
    return this.forgotForm.controls as { 
      [key: string]: any 
    }; 
  }
}
