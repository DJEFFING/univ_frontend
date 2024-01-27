import { EstablishmentService } from './../services/establishment.service';
import { Establishment } from './../models/establishment';
import { CityService } from '../services/city.service';
import { Category } from './../models/category';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';
import { City } from '../models/city';
import { Sector } from '../models/sector';
import { SectorService } from '../services/sector.service';
import { UniversityService } from '../services/university.service';
import { University } from '../models/university';
import { FormsModule, NgForm } from '@angular/forms';
import { TrainingCenter } from '../models/trainingcenter';
import { TraningCenterService } from '../services/traning-center.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
// loginForm: any;
@ViewChild('loginForm') loginForm!: NgForm;

onSubmit(form: NgForm) {
  console.log(form.value);
  // Do login here
}
public trainingcenter: TrainingCenter[]=[];
public filterTrainingCenter: TrainingCenter[]=[];
  categories:Category[] = []
  filterCategories:Category[] = [];

  establishment:Establishment[] = [];
  filterEstablishment:Establishment[] = [];

  sectors:Sector[] = [];
  filterSertor: Sector[] = [];


  cities:City[] = [];
  filterCities:City[] = [];

  public univerities:University[] = [];
  public filsterUniversity: University[] =[];
  public errorMessage:string = "";


  constructor(
    private categorieService:CategoryService,
    private cityService:CityService,
    private establishmentService:EstablishmentService,
    private sectorService:SectorService,
    private universityService: UniversityService,
    private trainingCenterService: TraningCenterService
  ){

  }

  ngOnInit(){
  this.categorieService.getAll().subscribe({
      next : categories =>{
        this.categories = categories;
        this.filterCategories = this.categories;
      }
    });

    this.cityService.getAll().subscribe({
      next: cities =>{
        this.cities = cities;
        this.filterCities =this.cities;
      }
    });

    this.establishmentService.getAll().subscribe({
      next: establishments=>{
        this.establishment = establishments;
        this.filterEstablishment = this.establishment;
      }
    });

    this.sectorService.getAll().subscribe({
      next: sectors=>{
        this.sectors = sectors;
        this.filterSertor = this.sectors
      }
    })

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


    // throw new Error('Method not implemented.');
  }



}
