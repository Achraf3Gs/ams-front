import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  etudients:string[]=[];
  mesPosts: any;
  nom:string="mon-composant";
constructor(private serviceUser:UsersService, private servicePosts:PostsService){

}
 ngOnInit(): void{

   this.etudients=this.serviceUser.getStudent();
   this.servicePosts.getPosts().subscribe(
    data=>{
      this.mesPosts= data;
    }
   );
 }

}
