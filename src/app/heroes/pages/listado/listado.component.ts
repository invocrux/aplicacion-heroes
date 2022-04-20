import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor( private heroeService: HeroesService) { }

  nombreHeroes:Heroe[] = [];  

  ngOnInit(): void {
    this.heroeService.getHeroes()
    .subscribe(resp => {this.nombreHeroes = resp} );
    
  }

}
