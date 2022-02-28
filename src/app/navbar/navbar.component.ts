import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  HoverData=[
    {
      img:"../../assets/Images/one-connect-link.svg",
      title:"One Connect",
      des:"Video Consulatation With Doctor"
    },
    {
      img:"../../assets/Images/one_doctor-link.svg",
      title:"One Doctor",
      des:"Certified and integrated Cloud based management solution"
    },
    {
      img:"../../assets/Images/one_lab-link.svg",
      title:"One Lab",
      des:"Designed for laboratories trusted by practices"
    },
    {
      img:"../../assets/Images/one_record-link.svg",
      title:"One Recors",
      des:"Easily manage your medical records and appointments"
    },
  ]
  AboutSideLinks=[
    "About","Mission & Vision",
    "Customers","Career","Contact"
  ]
  SupportLinks=[
    "Product Update","Contact","Terms of Use","Privacy Policy Services","Technical Support"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
