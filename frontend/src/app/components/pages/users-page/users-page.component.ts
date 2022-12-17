import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users!: User[];


  constructor(
    private userService: UserService,
  ) {
    userService.getAllUsers().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit(): void {
  }

}
