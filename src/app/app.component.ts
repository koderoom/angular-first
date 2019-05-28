import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hello! ';
  public name = 'My Name is Hello!!!';
  public count = 1;

  /** Member Function  */
  public counter() {
    this.count += 1;
  }
}
