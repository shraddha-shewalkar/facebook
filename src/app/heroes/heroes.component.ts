import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes=HEROES;
  private apiUrl="http://localhost:8888/"
  selectedHero=Hero;
  hero: Hero = {
    id: 1,
    name: '',
    email:'',
    contact:1,
    address:''
  };
 
  constructor(private http:Http) { }
  
  ngOnInit() {
  
  }
  onClickSubmit(data){
    //console.log(data);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.apiUrl,data,options).map((res:Response)=>res.json()).subscribe(data => {
       // console.log(data);
        
      });
      //console.log(data);
      //data.reset();      
  
  }
}
