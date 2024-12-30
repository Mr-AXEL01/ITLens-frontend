import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './modal-form.component.html'
})
export class ModalFormComponent {
  @Input() title!: string;
  @Input() data: any = {};
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  onSave(): void {
    this.save.emit(this.data);
  }

  onClose(): void {
    this.close.emit();
  }
}
