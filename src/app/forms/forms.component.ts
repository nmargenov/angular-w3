import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  title:string = '';
  description:string = '';

  @Input() notesList: INote[] = [];

  onSubmit() {
    const note: INote = {
      title: this.title,
      description: this.description
    }

    this.notesList.push(note);

    
  }
}
