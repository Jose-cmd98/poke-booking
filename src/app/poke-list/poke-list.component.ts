import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeModel } from '../service/api.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemon!: PokeModel[];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.getPoke();

  }
  getPoke(){
    this.dataService.pokeList().subscribe(data => {
      this.pokemon = data.results;
      console.log(this.pokemon);
    })
  }

}
