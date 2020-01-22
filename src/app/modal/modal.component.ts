import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

private click = false;

  @Input()
  public text = "";

  constructor() { }

  ngOnInit() {
  }

  X() {
    this.click = !this.click;

  }
}