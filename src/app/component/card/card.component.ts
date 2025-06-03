import { Component,Input, Output } from '@angular/core';
import { IPost } from '../../../models/posts.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post: IPost ={
    userName: "",
    userImgage: "",
    postDescription: "",
    postImage: "",
    isLiked: false
};
  
  comments: string[] =[];
   comment: string ='';
   addComment(){
    console.log(this.comment);
    this.comments.push(this.comment)
    this.comment=''
      }
}