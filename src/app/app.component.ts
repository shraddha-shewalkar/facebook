import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook';
  // url = 'http://localhost:8888/';
  // constructor(private httpService: HttpClient) {
  //   this.httpService.get(this.url).subscribe(
  //       data => {
  //         console.log(data, ".......///............")
  //         //this.heroes = data as string [];	 // FILL THE ARRAY WITH DATA.
  //         //console.log(this.heroes+"grilgldrfngkl");
  //       },
  //       (err: HttpErrorResponse) => {
  //         console.log(err.message, "...........");
  //       }
  //     );


  // }
  heroes: string[];

  ngOnInit() {

  }
}