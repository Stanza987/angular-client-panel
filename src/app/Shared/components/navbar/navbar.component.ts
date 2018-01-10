import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../../Core/services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .pointer {
      cursor: pointer;
    }
  `]
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private flashMessageService: FlashMessagesService,
    private settingsService: SettingsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      });

      this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessageService.show('You are logged out', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/login']);
  }

}
