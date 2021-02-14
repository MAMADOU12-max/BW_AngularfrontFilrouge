import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-archiving-data',
  templateUrl: './archiving-data.component.html',
  styleUrls: ['./archiving-data.component.css']
})
export class ArchivingDataComponent implements OnInit {
  users: any | undefined;
  totalUsers: number | any;
  //Pagination
  page: number | undefined = 1;
  key: string = 'username';
  reverse: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.refresNeeded$.subscribe( () => {
        this.getAllUsers() ;
      });
      this.getAllUsers() ;
  }

  // tslint:disable-next-line:typedef
  public getAllUsers() {

    this.userService.getAllUserArchivingfromdb().subscribe(data => {
      this.users = data ;
      // console.log(this.users) ;
      // this.users = data.results;
      this.totalUsers = this.users.length ;

      // console.log(this.totalUsers) ;
    });
  }

  restored(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to restore it!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.restoreUserfromdb(id).subscribe( data => {
          Swal.fire(
            'Restored!',
            'User has been restored.',
            'success'
          )
        });
      }
    })
  }

}
