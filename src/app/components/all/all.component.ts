import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = "All Users"
  public users: User[] = [];

  // use structural directive to check IF we have users, and if not, then we show the client message
  public clientMessage: ClientMessage = new ClientMessage('Sorry no users to display');

  constructor(private userService: UserService) { }

  // When this component is initialized (rendered in the root component)
  // we want to populate the array with all the users in the database
  ngOnInit(): void {

    // we will call the service method through a method of this class
    this.findAllUsers();
  }


  public findAllUsers() {
    this.userService.findAllUsers()
      .subscribe(data => this.users = data) // this defines what we do with the data returned from the observable
  }
}
