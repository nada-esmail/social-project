import { Injectable } from '@angular/core';
import { IPost } from '../../models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {
   private _posts: IPost[] = [
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
  postForm = new FormGroup({
    username: new FormControl('', Validators.required),
    userImage: new FormControl('', Validators.required),
    postDescription: new FormControl('', Validators.required),
    postImage: new FormControl('', Validators.required)
  });
  onSubmit() {
    console.log('Post Data:', this['postForm'].value);
  }
  addNewPost(newPost: IPost) {
    this._posts.push(newPost)
  }
  get posts() {
    return this._posts
  }
  constructor() { }
}
