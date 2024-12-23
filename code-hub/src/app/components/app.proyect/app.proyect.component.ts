import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import Projects from "../../shared/data/Projects";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.proyect.component.html',
  styleUrl: './app.proyect.component.sass'
})
export class AppProyectComponent {
  projects = Projects;
}
