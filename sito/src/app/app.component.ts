import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sito';
  click = 0;
  up(){
    this.click = this.click + 1
  }
  down(){
    this.click = this.click - 1
  }
}
