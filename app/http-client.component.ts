import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClient {
  constructor(public http: Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers:Headers) {
    headers.append('Access-Control-Allow-Origin' , 'http://localhost:3000'); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}