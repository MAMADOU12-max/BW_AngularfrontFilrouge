export class UserModal {
  id: number;
  firtname: string;
  profils: string;
  lastname: string;
  username: string;
  password: number;
  telephone: number;
  photo: string ;
  constructor(id: number, firtname: string, profils: string, lastname: string, username: string, password: number,
              telephone: number, photo: string) {
    this.id = id;
    this.firtname = firtname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.profils = profils ;
    this.telephone = telephone;
    this.photo = photo;
  }
}
