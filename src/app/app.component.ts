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
  title = 'notes';
  public notesList: INote[] = [{_id:1,title:'test',description:'test',selected:true}];
}
