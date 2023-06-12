import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FootModalsComponent } from '../foot-modals/foot-modals.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  txt = "var";
  
  constructor(private matDialog: MatDialog) { }
  footModals(text: any) {
    this.matDialog.open(FootModalsComponent, {
      width: '1000px',
      data:text
    });

  }
}
