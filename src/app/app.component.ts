import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UiversityDetailsComponent } from "./uiversity/uiversity-details/uiversity-details.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent, RouterLink, RouterModule, UiversityDetailsComponent]
})
export class AppComponent {
  title = 'dwolio-frontend';
}
