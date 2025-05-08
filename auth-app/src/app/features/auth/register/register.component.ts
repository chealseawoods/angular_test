import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.error = null;
    const formValue = this.registerForm.value;
    this.http.post<any>('https://second-brain-web.onrender.com/api/auth/register', formValue)
      .subscribe({
        next: (res) => {
          // Auto-login after registration
          this.http.post<any>('https://second-brain-web.onrender.com/api/auth/login', {
            email: formValue.email,
            password: formValue.password
          }).subscribe({
            next: (loginRes) => {
              localStorage.setItem('user', JSON.stringify(loginRes));
              this.router.navigate(['/dashboard']);
            },
            error: (err) => {
              this.error = 'Auto-login failed.';
              this.loading = false;
            }
          });
        },
        error: (err) => {
          this.error = err?.error?.message || 'Registration failed.';
          this.loading = false;
        }
      });
  }

  get f() { 
    return this.registerForm.controls as { 
      [key: string]: any 
    }; 
  }
}
