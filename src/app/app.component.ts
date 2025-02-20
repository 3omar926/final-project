import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  validateEmail(input: HTMLInputElement) {
    const isValid = input.checkValidity();
    input.classList.toggle('invalid', !isValid);
  }

  validatePassword(input: HTMLInputElement) {
    const isValid = input.checkValidity();
    input.classList.toggle('invalid', !isValid);
  }

  validateForm(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const isValid = form.checkValidity();
    
    if (isValid) {
      // Handle form submission
      console.log('Form submitted successfully');
    } else {
      // Show validation messages
      const inputs = form.querySelectorAll('input');
      inputs.forEach(input => {
        this.validateEmail(input);
        this.validatePassword(input);
      });
    }
    
    return false;
  }
}
