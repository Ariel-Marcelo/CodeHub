import {Component, HostListener, Input} from '@angular/core';
import {NgFor, NgClass} from "@angular/common";
import SocialLinks from "../../shared/data/SocialLinks";
import Sections from "../../shared/constants/Sections"

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './app.social-media.component.html',
  styleUrl: './app.social-media.component.sass'
})
export class AppSocialMediaComponent {

  @Input() currentSection!: string;

  protected readonly Sections = Sections;

  socialLinks = SocialLinks.map(link => ({
    ...link,
    icon: `fab fa-${link.name.toLowerCase()}`
  }));

}
