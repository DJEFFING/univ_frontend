import { TrainingCenter } from './../../models/trainingcenter';
import { University } from '../../models/university';
import { UniversityService } from '../../services/university.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { TraningCenterService } from '../../services/traning-center.service';

@Component({
  selector: 'app-uiversity-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HomeComponent,RouterLink,RouterModule],
  templateUrl: './uiversity-list.component.html',
  styleUrl: './uiversity-list.component.scss'
})
export class UiversityListComponent implements OnInit{
  // universityService!:UniversityService;
  public univerities:University[] = [];
  public filsterUniversity: University[] =[];
  public errorMessage:string = "";
  public trainingcenter: TrainingCenter[]=[];
  public filterTrainingCenter: TrainingCenter[]=[];



  constructor(private universityService: UniversityService, private trainingCenterService: TraningCenterService){


  }


  ngOnInit() {
    this.universityService.getUniversity().subscribe({
      next: universities => {
        this.univerities = universities;
        this.filsterUniversity = this.univerities;
      },
      error: err => this.errorMessage = err
    }),
    this.trainingCenterService.getAllTrainingCenter().subscribe({
      next: trainingcenter=>{
        this.trainingcenter = trainingcenter;
        this.filterTrainingCenter= this.trainingcenter;
      }
    })
  }

}
