import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  massage: any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    const resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.massage = data;
      console.log(data);
      this.router.navigate(['/home']);
    });
  }

}
