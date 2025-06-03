import { Component } from '@angular/core';
import { IPost } from "../models/posts.model"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
   posts:IPost[]=[
    {
    userName: "Nada Esmail",
    userImgage: "../assets/icon1.jpg",
    postDescription: "This is first post",
    postImage: "../assets/post1.jpg",
    isLiked: false
  },
  {
    userName: "Sara Ali",
    userImgage: "../assets/icon2.png",
    postDescription: "This is second post",
    postImage: "../assets/post2.jpg",
    isLiked: false
  },
  {
    userName: "Ahmed Omar",
    userImgage: "../assets/icon3.jpg",
    postDescription: "This is third post",
    postImage: "../assets/post3.jpg",
    isLiked: false
  }

  ]
}