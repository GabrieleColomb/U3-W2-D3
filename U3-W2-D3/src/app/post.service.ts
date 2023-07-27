import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl:string= " http://localhost:3000/posts";

  posts:Post[] = []
  postAttivi:Post[] = []
  postInattivi:Post[] = []

  constructor() { }

  fetchPost(){
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then((data) => {
        data.forEach((element:Post) => {
          this.posts.push(element)
        })
      })
      .catch(err => console.log(err))
  }

  changeStatus(id:number){
    this.posts[id-1].active = this.posts[id-1].active === true ? false : true
    fetch(' http://localhost:3000/posts' + id, {
      method: 'PUT',
      body: JSON.stringify(this.posts[id-1]),
      headers: {
        'Content-Type': 'application/json',}
      }).then(res => console.log(res)).catch(err => console.log(err))
  }

  getAttivi(){
      this.fetchPost()
      this.postAttivi = this.posts.filter(post => post.active === true)
      this.posts = []
      return this.postAttivi
    }


  getInattivi(){
      this.fetchPost()
      this.postInattivi = this.posts.filter(post => post.active === false)
      this.posts = []
      return this.postInattivi
    }

}

