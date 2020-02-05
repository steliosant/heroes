import { Component, OnInit } from '@angular/core';
import  { Hero } from '../hero'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero : Hero = {
    id: 1,
    name: "Windstorm"
  }

}

