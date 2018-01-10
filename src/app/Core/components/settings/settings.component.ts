import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../../models/Settings';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(
    private settingsService: SettingsService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show('Settings saved', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/settings']);
  }

}
