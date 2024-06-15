import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent {
  title = 'calculator';

  input:string="";

  num(num:string){
    if(num === null){
      this.input = "";
    }else{
      this.input = this.input+num;
    }
  }

  operator(operation:string){
    if (this.input === '') return;
    const lastChar = this.input[this.input.length - 1];
    if (['+', '-', '*', '/','%'].includes(lastChar)) {
      this.input = this.input.slice(0, -1) + operation;
    } else {
      this.input += operation;
    }
  }

  calculate() {
    try {
      this.input = eval(this.input);
    } catch (e) {
      this.input = 'Error';
    }
  }
  clear(){
    this.input = this.input.slice(0,this.input.length - 1);
  }
  allClear(){
    this.input = "";
  }
}
