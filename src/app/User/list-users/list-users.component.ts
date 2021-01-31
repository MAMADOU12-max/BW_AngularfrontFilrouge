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

  // public function ExcelFile($file_path)
  // {
  //   $inputFileType = PHPExcel_IOFactory::identify($file_path);
  //   /*  Create a new Reader of the type defined in $inputFileType  */
  //   $objReader = PHPExcel_IOFactory::createReader($inputFileType);
  //   $objPHPExcel = $objReader->load($file_path);
  //   $cell_collection = $objPHPExcel->getActiveSheet()->getCellCollection();
  //   //extract to a PHP readable array format
  //   foreach ($cell_collection as $cell) {
  //   $column = $objPHPExcel->getActiveSheet()->getCell($cell)->getColumn();
  //   $row = $objPHPExcel->getActiveSheet()->getCell($cell)->getRow();
  //   $data_value = $objPHPExcel->getActiveSheet()->getCell($cell)->getValue();
  //   //header will/should be in row 1 only. of course this can be modified to suit your need.
  //   if ($row == 1) {
  //     $header[$row][$column] = $data_value;
  //   } else {
  //     $arr_data[$row][$column] = $data_value;
  //   }
  // }
  //   //send the data in an array format
  //   $data['header'] = $header;
  //   $data['values'] = $arr_data;
  //   return $arr_data;
  // }
  // n'oubliez pa d'installer ce bundle
  // composer require phpoffice/phpexcel
}
