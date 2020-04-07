import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() message: string;
  @Input() articleId: number;
  @Output() modalClose = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
              private adminService: AdminService) { }

  onClose() {
    this.modalClose.emit();
  }

  onDelete() {
    const paramsName = this.route.snapshot.params.name;
    this.adminService.deleteArticle(this.articleId, paramsName);
    this.deleteItem.emit();
    this.modalClose.emit();
  }

}
