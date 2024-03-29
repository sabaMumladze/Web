import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgbCarouselModule,FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {


  images = ['1.png', '2.avif', '3.jpg'].map((n) => `./../../assets/image/truck${n}`);




there : string  = ''
from : string = ''
data : any = ''
time : any = ''

active : boolean = true
calc() {

  this.active = !this.active

  
}













}
