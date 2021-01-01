export class UserModal {
  id: number;
  firtname: string;
  lastname: string;
  username: string;
  password: number;
  telephone: number;
  photo: string ;
  constructor(id: number, firtname: string, lastname: string, username: string, password: number, telephone: number, photo: string) {
    this.id = id;
    this.firtname = firtname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.telephone = telephone;
    this.photo = photo;
  }
}
