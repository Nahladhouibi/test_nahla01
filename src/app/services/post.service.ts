import { Injectable } from "@angular/core";
import { Post } from "../models/post.models";
@Injectable({
    providedIn:'root'
})
export class PostService {
    posts: Post[]=[
    
            new Post(1,'Post1','le contenu de 1ere article '),
            new Post(2,'Post2','le contenu de 2eme article '),
            new Post(3,'Post3','le contenu de 3eme article '),
            new Post(4,'Post14','le contenu de 4eme article '),
          
          
    ];
    constructor() { }
    getAllPostList(): Post[] {
        return this.posts;
      }
    }