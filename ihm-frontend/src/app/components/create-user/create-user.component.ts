import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/user';
import { UserService } from 'src/app/providers/user.service';
import { ComponentsLinkerService } from 'src/app/providers/components-linker.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private linker: ComponentsLinkerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.saveUser();
  }

  saveUser() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.linker.sendClickEvent();
    // this.gotoList();
  }

  /*gotoList() {
    this.router.navigate(['/employees']);
  }*/
}
