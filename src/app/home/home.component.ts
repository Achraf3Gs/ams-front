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
  logo:string="https://nsm08.casimages.com/img/2013/07/24/1307241027119919611409278.png"
  displayed: boolean=true;
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
 display()
 {
  this.displayed=!this.displayed;
 }

}
