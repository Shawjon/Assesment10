import { Component, OnInit } from '@angular/core';
import { Post} from "../app/models/postModel"

import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'The post place!';


  tempValue1 = '';
  tempValue2 ='';
  hidebox1: boolean = false;
  hidebox2: boolean = true;
  constructor(
   
    ) { }
  counter:number;

  postList: Post[] = [
    {postName:"Dog", postDiscription:"Dogs are great, dont you think?", style:"new"},
    {postName:"Cat", postDiscription:"Cats are cool, not as much as dogs but they can be pretty close.", style:"new"},
    {postName:"Apple", postDiscription:"Apples are a great fruit, I really like them.", style:"new"}
    
  ]
  trackByPost(index: number, post: Post): string{
    return post.postName;

  }

  
  addPost() {
    if (this.postList.every(a => a.postName != this.tempValue1)) {
    this.postList.push(new Post(this.tempValue1, this.tempValue2));
    this.tempValue1 = '';
    this.tempValue2 = '';
    this.hidebox1 = false;
    this.hidebox2 = true;
      }
    }

    remove(index:number){
      this.postList.splice(index, 1);
    }
    showform(){
      this.hidebox1 = true;
      this.hidebox2 = false;
    }
  ngOnInit() {}
     

   

    
  }


