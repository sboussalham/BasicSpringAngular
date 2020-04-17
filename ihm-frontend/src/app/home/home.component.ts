import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'AngularLearnProject';
  entred = '';
  displayed = true;
  choice = 'A';

  users: any;

  onClick() {
    console.log('Welcome there');
    this.entred = 'Helloooo';
    this.displayed = !this.displayed;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

}
