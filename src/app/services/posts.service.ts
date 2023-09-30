import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private Http: HttpClient) { }

  getPosts()
  {
    return this.Http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
