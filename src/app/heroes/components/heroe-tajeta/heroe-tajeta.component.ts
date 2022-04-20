import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heores.interface';

@Component({
  selector: 'app-heroe-tajeta',
  templateUrl: './heroe-tajeta.component.html',
  styleUrls: ['./heroe-tajeta.component.css']
})
export class HeroeTajetaComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
