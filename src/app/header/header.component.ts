import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logout() {
    if (confirm('Are you sure you want logout?')) {
      const token = localStorage.getItem('token') ;
      localStorage.clear();
    }
  }
}
