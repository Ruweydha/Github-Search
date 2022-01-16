import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UsersHttpRequestService } from '../users-http-request.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  user!:User

  searchUserName(username:string){
    this._usersRequest.userRequest(username);
    this.user = this._usersRequest.user
    
  }

  constructor(private http:HttpClient, private _usersRequest:UsersHttpRequestService) { }


  ngOnInit(): void {}

}
