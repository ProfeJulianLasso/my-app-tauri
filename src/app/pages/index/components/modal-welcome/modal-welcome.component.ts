import { Component, OnInit } from '@angular/core';
import { RustService } from 'src/app/services/rust.service';

@Component({
  selector: 'app-modal-welcome',
  templateUrl: './modal-welcome.component.html',
  styleUrls: ['./modal-welcome.component.scss']
})
export class ModalWelcomeComponent implements OnInit {

  message!: string;

  constructor(private rust: RustService) { }

  async ngOnInit(): Promise<void> {
    this.message = await this.rust.callHelloWorld('Lalo Landa');
  }

}
