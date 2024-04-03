import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitlePipe } from '../pipe/task.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe, TitlePipe ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})


export class TableComponent {
  public students = [
    { name: 'Sachin', gender: 'male', age: 20 },
    { name: 'Nila', gender: 'female', age: 20 },
    { name: 'Alex', gender: 'male', age: 21 }
  ];
}
