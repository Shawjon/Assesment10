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


  tempValue1 ='';
  tempValue2 ='';
  hidebox1: boolean = false;
  hidebox2: boolean = true;
  constructor(
   
    ) { }
  counter:number;

  postList: Post[] = [
    {postName:"Test", postDescription:"1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 1234567890123456789012345678901234567890 12345678901234567890 ", style:"new"}
    ,{postName:"Dog", postDescription:"Dogs are great, dont you think?", style:"new"},
    {postName:"Cat", postDescription:"Cats are cool, not as much as dogs but they can be pretty close.", style:"new"},
    {postName:"Apple", postDescription:"Apples are a great fruit, I really like them.", style:"new"}
    
  ]
  trackByPost(index: number, post: Post): string{
    return post.postName;

  }

  
  addPost() {
    if((this.tempValue1 !='' && this.tempValue2 !='')  ){

    
    if (this.postList.every(a => a.postName != this.tempValue1)) {
    this.postList.unshift(new Post(this.tempValue1, this.tempValue2));
    this.tempValue1 = '';
    this.tempValue2 = '';
    this.hidebox1 = false;
    this.hidebox2 = true;
      }
    }else{
      alert('Post is not complete');
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


