import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote } from '../INote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() notesList: INote[] = [];
  @Input() title!:String;
  @Input() description!:String;

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

  delete(id:number){
    this.notesList.splice(this.notesList.findIndex(note=>note._id === id),1);
  }

  edit(id:number){
    const note = this.notesList.find(note=>note._id === id);

    this.updateTitle(note?.title!);
    this.updateDescription(note?.description!);
  }
  toggleSelection(event: MouseEvent, note: INote) {
    const target = event.target as HTMLElement;
    if (target.tagName !== "BUTTON") {
      this.notesList.forEach(item => {
        if (item !== note) {
          item.selected = false;
        }
      });
  
      note.selected = !note.selected;
    }
  }

}
