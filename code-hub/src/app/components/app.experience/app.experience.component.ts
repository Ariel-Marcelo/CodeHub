import { Component } from '@angular/core';
import { NgFor} from "@angular/common";
import Experiences from "../../shared/data/Experiences";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.experience.component.html',
  styleUrl: './app.experience.component.sass'
})
export class AppExperienceComponent {
  experiences = Experiences;
}
