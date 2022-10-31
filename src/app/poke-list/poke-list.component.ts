import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { PokeModel } from '../service/api.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }


}
