import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  unsafeImageUrl:any;
  imageUrl:any;

  constructor(
    private http: HttpClient,
    private sanitizer:DomSanitizer)
  {
    this.hello();
  }

  hello(){
    this.http.get('http://127.0.0.1:5000',{responseType:'blob'})
     .subscribe(
       (res:any) => {
         console.log(res);
         this.unsafeImageUrl = URL.createObjectURL(res);
         this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(this.unsafeImageUrl);
       })
  }

}
