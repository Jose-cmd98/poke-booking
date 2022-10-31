import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
  pokemons = [];

  constructor(private http : HttpClient) {
    this.loadPokemons();
   }
  // pokeList():Observable<PokeModel>{
  //    return this.http.get<PokeModel>(this.baseUrl);

  //  }
  // getPokeData(name: string){
  //   return this.http.get(`baseUrl/${name}`)
  // }

  //  async loadPokemons(){
  //    const req = await this.http
  //    .get<any>("https://pokeapi.co/api/v2/pokemon?limit=151")
  //     .toPromise();
  //     this.pokemons = req.results;
  //  }

   loadPokemons(){
     return this.http.get(`baseUrl/${name}`)
   }

  }
