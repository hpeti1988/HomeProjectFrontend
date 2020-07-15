import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    console.log(username, password);

    let authObservable: Observable<any>;

    authObservable = this.authService.login(username, password);

    authObservable.subscribe(resData => {
      console.log(resData);
      alert("You have successfully logged in.")
      this.router.navigate(['/recipes']);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
