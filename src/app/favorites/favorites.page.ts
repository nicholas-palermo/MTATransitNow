import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {}

  loggedIn = false;

  login(email, password) {
    this.authService.SignIn(email.value, password.value)
    .then((res) => {
      if(this.authService.isEmailVerified) {
        this.router.navigate(['dashboard']);
      }
      else {
        window.alert('Email is not verified');
        return false;
      }
    })
    .catch((error) => {
      window.alert(error.message)
    })
  }

  isLoggedIn() {
    if(this.authService.isLoggedIn) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
    return this.loggedIn;
  }
}
