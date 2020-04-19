import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { ComponentsLinkerService } from 'src/app/providers/components-linker.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/modals/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  // users: any;
  users: Observable<User[]>;
  clickEventsubscription: Subscription;

  constructor(private userService: UserService, private linker: ComponentsLinkerService) {
    this.clickEventsubscription = this.linker.getClickEvent().subscribe(() => {
      this.getUsers();
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
    // this.users = this.userService.getUsers();
  }

}
