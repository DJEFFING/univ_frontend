export class Sector{
  id:number;
  title:string;
  menvershipCondition:string;
  description:string;
  price:number;
  durationCourse:string;
  
  constructor(id:number, title:string,menvershipCondition:string,description:string,price:number,durationCourse:string){
    this.id = id;
    this.title = title;
    this.menvershipCondition = menvershipCondition;
    this.description = description;
    this.price = price;
    this.durationCourse = durationCourse
  }
}
