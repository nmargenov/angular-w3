import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { INote } from '../INote';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  @Input() title!:String;
  @Input() description!:String;
  @Input() notesList: INote[] = [];
  

  @Output() titleChange = new EventEmitter<String>();
  @Output() descriptionChange = new EventEmitter<String>();

  updateTitle(newTitle: String) {
    this.title = newTitle;
    this.titleChange.emit(newTitle);
  }

  updateDescription(newDescription: String) {
    this.description = newDescription;
    this.descriptionChange.emit(newDescription);
  }

  onSubmit() {
    const note: INote = {
      _id: new Date().getTime(),
      title: this.title,
      description: this.description,
      selected:false
    }

    this.notesList.push(note);

    this.updateTitle('');
    this.updateDescription('');
  }
}
