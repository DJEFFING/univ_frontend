import { Category } from "./category";
import { City } from "./city";
import { Establishment } from "./establishment";
import { User } from "./user";

export class University{
  id:number;
  name:string;
  logo:string;
  description:string;
  mangerNumber:string;
  webSite:string;
  etablishment:Establishment;
  category:Category;
  city:City;
  user:User;

  constructor(id:number,name:string,logo:string,description:string,mangerNumber:string,webSite:string,etablishment:Establishment,category:Category,city:City,user:User){
    this.id =id;
    this.name = name;
    this.logo = logo;
    this.description = description;
    this.mangerNumber = mangerNumber;
    this.webSite = webSite;
    this.etablishment = etablishment;
    this.category = category;
    this.city = city;
    this.user = user;
  }
}
