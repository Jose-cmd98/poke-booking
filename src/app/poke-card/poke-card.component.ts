
import { PokeModel } from './../service/api.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {


  @Input() numero!: number;

  @Input() pokemon!: string;

  constructor() { }


  ngOnInit(): void {

  }

  pokePoster(){
    const pokeNumber = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeNumber}.png`
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  // getPoke(){
  //   this.dataService.pokeList().subscribe(data => {
  //     this.pokemon = data.results;
  //     console.log(this.pokemon);
  //   })
  // }

}
