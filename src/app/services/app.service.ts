import { Injectable } from '@angular/core';
import { IPost } from '../../models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {
   private _posts: IPost[] = [
    {
      id: 1,
      userName: "Nada Esmail",
      userImage: "../assets/icon1.jpg",
      postDescription: "This is first post",
      postImage: "../assets/post1.jpg",
      isLiked: false
    },
    {
      id:2,
      userName: "Sara Ali",
      userImage: "../assets/icon2.png",
      postDescription: "This is second post",
      postImage: "../assets/post2.jpg",
      isLiked: false
    },
    {
      id: 3,
      userName: "Ahmed Omar",
      userImage: "../assets/icon3.jpg",
      postDescription: "This is third post",
      postImage: "../assets/post3.jpg",
      isLiked: false
    }

  ]
  postForm = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    userImage: new FormControl<string>('', Validators.required),
    postDescription: new FormControl<string>('', Validators.required),
    postImage: new FormControl<string>('', Validators.required)
  });
  
  isPostFormShowen=false;
  
  onSubmit() {
    this.addNewPost();
    this.postForm.reset();
  }
  addNewPost() {
    if(this.postForm.valid){
      const userName = this.postForm.value.username ?? '';
      const userImage = this.postForm.value.userImage ?? '';
      const postDescription = this.postForm.value.postDescription ?? '';
      const postImage = this.postForm.value.postImage ?? '';
      this._posts.push({
        id: (this._posts[this._posts.length - 1]?.id ?? 0) + 1,
        userName,
        userImage,
        postDescription,
        postImage,
        isLiked: false
            })
          }
      
          this.isPostFormShowen=false;
        }
  deletePost(id:number){
    this._posts = this._posts.filter((post) => post.id !== id)
  }
    get posts() {
          return this._posts
        }

        constructor() { }
      }
