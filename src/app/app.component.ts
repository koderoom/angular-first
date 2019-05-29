import { Component } from '@angular/core';
import Post from 'src/app/post.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hello! ';
  public name = 'My Name is Hello!!!';
  public count = 1;

  public tempList = ['1', '2', '3'];
  public dataList;

  public postList: Post[];

  public constructor() {
    this.dataList = [];
    this.postList = Post.getPostList();
  }

  /** Member Function  */
  public counter() {
    this.count += 1;
  }

  public addBlock(): void {
    this.dataList.push('Q');
  }
}
