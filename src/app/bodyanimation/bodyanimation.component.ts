import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyanimation',
  templateUrl: './bodyanimation.component.html',
  styleUrls: ['./bodyanimation.component.css']
})
export class BodyanimationComponent implements OnInit {
 imgsrc=[
   "../../assets/Images/onli.jfif","../../assets/Images/onlineapo.png","../../assets/Images/test.jpg",
   "../../assets/Images/healthcareimage.svg"
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
