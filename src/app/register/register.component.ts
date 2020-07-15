import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user: User;

  constructor(private http: HttpClient, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.reset();
    }
    this.user = {
      id: 0,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  onSubmit(form: NgForm) {
    this.registerService.registerUser(form.value)
    .subscribe((data: any) => {
      alert('Successful registration!')
      this.resetForm(form);
      this.router.navigateByUrl('/login');
      },
      err => alert('An error occured during registration!')
    )
  }

}
