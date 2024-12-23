import {Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AppAboutComponent } from "../components/app.about/app.about.component";
import { AppProyectComponent } from "../components/app.proyect/app.proyect.component";
import { AppSocialMediaComponent } from "../components/app.social-media/app.social-media.component";
import { AppExperienceComponent} from "../components/app.experience/app.experience.component";
import { NgIf } from "@angular/common";
import Sections from '../shared/constants/Sections';
import { debounceTime, fromEvent } from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AppAboutComponent,
    AppExperienceComponent,
    AppProyectComponent,
    AppSocialMediaComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(AppAboutComponent, { read: ElementRef }) aboutComponent!: ElementRef;
  @ViewChild(AppExperienceComponent, { read: ElementRef }) experienceComponent!: ElementRef;
  @ViewChild(AppProyectComponent, { read: ElementRef }) proyectComponent!: ElementRef;

  visibleSection: string;

  constructor() {
    this.visibleSection = Sections[0].id;
  }

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(100))
      .subscribe(() => this.handleMainContentScroll());
  }

  ngAfterViewInit() {
    this.detectVisibleSection();
  }

  handleMainContentScroll() {
    this.detectVisibleSection();
  }

  detectVisibleSection() {
    const sections = [
      { rect: this.aboutComponent.nativeElement.getBoundingClientRect(), id: Sections[0].id },
      { rect: this.proyectComponent.nativeElement.getBoundingClientRect(), id: Sections[1].id },
      { rect: this.experienceComponent.nativeElement.getBoundingClientRect(), id: Sections[2].id },
    ];

    const closestSection = sections.reduce((closest, section) =>
      Math.abs(section.rect.top) < Math.abs(closest.rect.top) ? section : closest
    );

    this.visibleSection = closestSection.id;
  }
}
