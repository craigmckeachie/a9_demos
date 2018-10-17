# Playground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Form Binding

```ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
      <h1>
       Forms
      </h1>
      <form [formGroup]="loginForm" (submit)="onSubmit()">
        <input formControlName="username" type="text" name="username">
        <br>
        <input formControlName="password" type="text" name="password">
        <br>
        <button>Sign In</button>
      </form>

      <pre>
        {{loginForm.value | json}}
      </pre>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
```

<div style="page-break-after: always;"></div>

### Validation

```ts
 ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl()
    });
}
```

```html
<pre *ngIf="loginForm.get('username').invalid">
    {{loginForm.get('username').errors | json}}
</pre>
```

### Validation Messages

```html
<div *ngIf="loginForm.get('username').dirty &&
            loginForm.get('username').invalid &&
            loginForm.get('username').touched">
  <div *ngIf="loginForm.get('username').hasError('required')">
    Username is required.
  </div>
</div>
```
