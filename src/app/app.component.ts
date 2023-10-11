import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyCalculator';

  inputValue = '0';

  currentValue = '';

  SendValueToInput(value: any) {
    console.log(value);
    this.currentValue = this.currentValue + value;

    this.inputValue = this.currentValue;
    console.log(this.inputValue);
  }

  Calculate() {
    this.inputValue = eval(this.currentValue);
    this.currentValue = this.inputValue;
  }

  ClearAll(){
    this.inputValue='0'
    this.currentValue=''

  }

  Back(){
    this.currentValue=this.currentValue.slice(0,-1)
    this.inputValue=this.currentValue;
  }
}
