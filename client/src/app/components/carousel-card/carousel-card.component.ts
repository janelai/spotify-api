import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  name:string;
  id:string;
  url:string;
  imgurl:string;
  cat:string;
  @Input() resource:ResourceData;
  
  constructor() { }

  ngOnInit() {
    this.name = this.resource.name;
    this.id = this.resource.id;
    this.url = this.resource.url;
    this.imgurl = this.resource.imageURL;
    this.cat = this.resource.category;
  }

}