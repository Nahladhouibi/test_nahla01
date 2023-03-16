import { Component } from '@angular/core';
import { Post } from '../models/post.models';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  
  posts: Post[]=[
    
    new Post(1,'Post1','le contenu de 1ere article '),
    new Post(2,'Post2','le contenu de 2eme article '),
    new Post(3,'Post3','le contenu de 3eme article '),
    new Post(4,'Post14','le contenu de 4eme article '),
  
  
];
post : Post[];
constructor(private postService : PostService){
  this.post = this.postService.posts;
}

}
