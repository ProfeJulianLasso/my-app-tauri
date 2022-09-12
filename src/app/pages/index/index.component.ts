import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWelcomeComponent } from './components/modal-welcome/modal-welcome.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    this.dialog.open(ModalWelcomeComponent, {
      width: '350px',
      autoFocus: false
    });
  }

}
