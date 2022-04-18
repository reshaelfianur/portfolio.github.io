import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from './about/about.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';

const portfolioRoutes: Routes = [
  { path: '', component: PortfolioComponent }
];

@NgModule({
  declarations: [
    PortfolioComponent,
    AboutComponent,
    CompetencesComponent,
    ContactComponent,
    EducationComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ReferencesComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    RouterModule.forChild(portfolioRoutes)
  ]
})
export class PortfolioModule { }
