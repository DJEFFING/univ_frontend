export class User{
  id:number;
  fistName:string;
  lastName:string;
  email:string;
  password:string;
  profilImage: string;

  constructor(id:number,fistName:string,lasName:string,email:string,password:string,profilImage:string){
    this.id =id;
    this.fistName=fistName;
    this.lastName=lasName;
    this.email=email;
    this.password=password;
    this.profilImage=profilImage;
  }
  
}
