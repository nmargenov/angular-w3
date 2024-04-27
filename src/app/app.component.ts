import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { INote } from './INote';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public notesList: INote[] = [];
  title:String = '';
  description:String = '';

  updateTitle(newTitle: String) {
    this.title = newTitle;
    console.log(this.title)
  }

  updateDescription(newDescription: String) {
    this.description = newDescription;
    console.log(this.description)
  }
}
