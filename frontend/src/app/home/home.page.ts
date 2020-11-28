import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {
    this.hello();
  }

  hello(){
    this.http.get('http://127.0.0.1:5000')
     .subscribe(
       (res) => {
         console.log(res);
       })
  }

}
