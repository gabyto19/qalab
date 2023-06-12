import { Component } from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  constructor(private matDialog: MatDialog) { }

  openRegister() {
    this.matDialog.open(RegisterModalComponent, {
      width: '550px',

    });
  }
}
