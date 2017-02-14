import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  captcha : boolean = false;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(this.form.value);
    let req = this.http.post(`http://elliot-kersale.com:12000/mail`, { data }, options).map((res:Response) => res.json());
    req.subscribe(data => console.log("success"), error => console.log("err"));
  }

  resolved(captchaResponse: string) {
    this.captcha = true;
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
