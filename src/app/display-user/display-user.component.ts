import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersHttpRequestService } from '../users-http-request.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  user!:User;
  repos!:Repository[];

  searchUserName(username:string){
    this.users_Request.userRequest(username);
    this.user = this.users_Request.user;
    this.users_Request.repoRequest(username).subscribe(data=>{
      this.repos = data
    })
    
  }

  constructor( private users_Request:UsersHttpRequestService) { }


  ngOnInit(): void {}

}
