import { Component } from '@angular/core';
import { SignModalComponent } from '../sign-modal/sign-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
  
})
export class NavigationComponent {
  constructor(private matDialog: MatDialog) { }

  selected = 'op';


  openDialog() {
    this.matDialog.open(SignModalComponent, {
      width: '550px',

    });
  }
  openRegister() {
    this.matDialog.open(RegisterModalComponent, {
      width: '550px',

    });
  }

}
