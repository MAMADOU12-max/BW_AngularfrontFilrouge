import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  myAngularxQrCode: any | undefined;
  userSelected: any;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    // assign a value
      this.myAngularxQrCode = 'Your QR code data string is nulll';
  }

  ngOnInit(): void {
     const idUser = +this.activatedRoute.snapshot.params.id ;
     this.userService.getUserByIdfromdb(idUser).subscribe( data => {
       // console.log(data) ;
       this.userSelected = data ;
       // this.myAngularxQrCode = this.userSelected;
       console.log(this.userSelected);
     });
  }

}
