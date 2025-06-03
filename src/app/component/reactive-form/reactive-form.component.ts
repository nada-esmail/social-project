import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
// import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  AppService = inject(AppService)

}
