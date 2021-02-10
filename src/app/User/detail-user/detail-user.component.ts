import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  role: string | any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    // assign a value
      this.myAngularxQrCode = 'Your QR code data string is nulll';
  }

  ngOnInit(): void {
     const idUser = +this.activatedRoute.snapshot.params.id ;
     this.userService.getUserByIdfromdb(idUser).subscribe( data => {
       //console.log(data) ;
       this.userSelected = data ;
       // this.myAngularxQrCode = this.userSelected;
       // this.role = this.userSelected.roles[0];
     });
  }

  deleteUser(id: number){
    if (confirm('Are you sure that you remove this user?')) {
      this.userService.deletUserfromdb(id).subscribe(data => {
          this.router.navigate(['/listUsers']);
      });
    }
  }
}
