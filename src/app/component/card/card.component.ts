import { Component,inject,Input, Output } from '@angular/core';
import { IPost } from '../../../models/posts.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post: IPost ={
    id: -1,
    userName: "",
    userImage: "",
    postDescription: "",
    postImage: "",
    isLiked: false
};
  appService = inject(AppService) 
  comments: string[] =[];
   comment: string ='';
   addComment(){
    console.log(this.comment);
    this.comments.push(this.comment)
    this.comment=''
      }
}