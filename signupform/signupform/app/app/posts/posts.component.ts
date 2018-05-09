import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  item = "enter item";
  itemList = ["Item1", "Item2", "Item3"];
  
  constructor() { }
  
  addItem(item){
    console.log(item);
    this.itemList.push(item);
    this.item = '';
  }

  ngOnInit() {
  }

}
