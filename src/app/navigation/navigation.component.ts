import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  loggingOut() {
    this.auth.logout();
    alert("You have been logged out.")
    this.router.navigateByUrl("/login");
  }
}
