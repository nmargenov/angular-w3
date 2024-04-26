import { Component, Input } from '@angular/core';
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


  delete(id:number){
    this.notesList.splice(this.notesList.findIndex(note=>note._id === id),1);
  }

  edit(){
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
