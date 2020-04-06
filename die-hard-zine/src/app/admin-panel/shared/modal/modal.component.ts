import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent   {
  @Input() message: string;
  @Output() modalClose = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();

  constructor() { }

  onClose() {
    this.modalClose.emit();
  }

  onDelete() {
    this.deleteItem.emit();
  }

}
