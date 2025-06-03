import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  postForm = new FormGroup({
    username: new FormControl(''),
    userImage: new FormControl(''),
    postDescription: new FormControl(''),
    postImage: new FormControl('')
  });

  onSubmit() {
    console.log('Post Data:', this.postForm.value);
  }
}
