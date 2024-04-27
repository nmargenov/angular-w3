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
  @Input() idToEdit:number | undefined;
  

  @Output() titleChange = new EventEmitter<String>();
  @Output() descriptionChange = new EventEmitter<String>();
  @Output() toEditIdChange = new EventEmitter<number>();

  updateTitle(newTitle: String) {
    this.title = newTitle;
    this.titleChange.emit(newTitle);
  }

  updateDescription(newDescription: String) {
    this.description = newDescription;
    this.descriptionChange.emit(newDescription);
  }

  onSubmit() {

    if(!this.idToEdit){
      const note: INote = {
        _id: new Date().getTime(),
        title: this.title,
        description: this.description,
        selected:false
      }
      this.notesList.push(note);
    }
    else{
      const index = this.notesList.findIndex(note => note._id === this.idToEdit);
      if(this.notesList[index] !== undefined){
        this.notesList[index].title = this.title;
        this.notesList[index].description = this.description;
      }
      this.toEditIdChange.emit(undefined);
    }

    this.updateTitle('');
    this.updateDescription('');
  }
}
