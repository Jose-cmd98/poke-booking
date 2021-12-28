import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeModel } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  pokemons = [];

  constructor(private http : HttpClient) {

   }
  pokeList():Observable<PokeModel>{
     return this.http.get<PokeModel>(this.baseUrl);

   }


  }
