import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private user: User = {};
  private result = 'pending';

  constructor(private authenticationService: AuthenticationService) { }

  register() {
    this.authenticationService.register(this.user).subscribe((result) => {
        this.result = result.toString();
    });
  }
}
