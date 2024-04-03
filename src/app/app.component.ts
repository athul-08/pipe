import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TableComponent } from './table/table.component';
import { TitlePipe } from './pipe/task.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ExampleComponent, TableComponent, TitlePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipe';
}
