import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { User } from '../modals/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Crud user operations';
  entred = '';
  displayed = true;
  choice = 'A';

  // users: any;
  users: Observable<User[]>;

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
    // this.users = this.userService.getUsers();
  }

}
