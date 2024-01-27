import { University } from './../../models/university';
import { UniversityService } from '../../services/university.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uiversity-details',
  standalone: true,
  imports: [],
  templateUrl: './uiversity-details.component.html',
  styleUrl: './uiversity-details.component.scss'
})
export class UiversityDetailsComponent implements OnInit {

  university:University = <University>{};
  filterUniversity:University = <University>{};
  public errorMessage:string = "";
  public image:string='assets/images/propertes/property_details.jpg';


  constructor(private route:ActivatedRoute, private universityService:UniversityService){

  }
  ngOnInit(){
    const id:number = Number(this.route.snapshot.paramMap.get('id'));
    this.universityService.getById(id).subscribe(
      {
        next: university =>{
          this.university = university;
          this.filterUniversity=this.university;
        },
        error: err => this.errorMessage = err
      }
    )
    // console.log("id:", id);
    // throw new Error('Method not implemented.');
  }

}
