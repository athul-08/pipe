import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe,  } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe , DecimalPipe, PercentPipe , SlicePipe , CurrencyPipe,JsonPipe,DatePipe ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
public subText: string ="HELLO WORLD";
public details={ Name: "Athul", Age: "23", Email:"athulprasad0812.com" };
public currentdate = new Date();
}
