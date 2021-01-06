import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any = [] ;
  page: number | undefined = 1;
  totalUsers: number | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.refresNeeded$.subscribe( () => {
      this.getAllUsers() ;
    });
    this.getAllUsers() ;
  }
  // tslint:disable-next-line:typedef
  public getAllUsers() {

    this.userService.getAllUserfromdb().subscribe(data => {
      this.users = data ;
      // console.log(this.users) ;
      // this.users = data.results;
      this.totalUsers = this.users.length ;

      // console.log(this.totalUsers) ;
    });
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    if (confirm('Are you sure that you remove this user?')) {
        this.userService.deletUserfromdb(id).subscribe(data => {
          alert('user removed with success');
        });
    }
  }
}
