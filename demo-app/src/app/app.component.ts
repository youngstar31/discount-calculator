import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discount Calculator';

  public num3: number;

  calculation(num1, num2){
    this.num3 = num1 - (num1 * (num2/100))
  };

  
}
