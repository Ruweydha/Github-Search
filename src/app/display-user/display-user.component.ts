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

  ngOnInit(){
    interface ApiResponse{
      login:string; 
      followers:number;
      following:number; 
      avatar_url:string;
      created_at:Date;
    }
    this.http.get<ApiResponse>("https://api.github.com/users").subscribe(data=>{
      this.user = new User(data.login, data.followers, data.following, data.avatar_url, data.created_at)
    }, err=>{
      console.log("An error has occured")
    })
  }

}
