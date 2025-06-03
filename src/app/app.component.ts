import { Component, inject } from '@angular/core';
import { AppService } from './services/app.service';
// import { IPost } from "../models/posts.model"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
   AppService = inject(AppService)
  isPostFormShowen=false;
posts: any;
}