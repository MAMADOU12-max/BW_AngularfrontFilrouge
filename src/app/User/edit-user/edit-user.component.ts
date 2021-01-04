import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userUpdated: UserModal | any ;
  constructor(private activated: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
     const idUserUpdated = +this.activated.snapshot.params.id ;
     console.log(idUserUpdated) ;
     this.userService.getUserByIdfromdb(idUserUpdated).subscribe( data => {
          this.userUpdated = data ;
     });
  }

}
