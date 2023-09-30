import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  students: string[]=["Nawfil", "Marwa", "Ali","Aymen", "Hakim"];
  constructor() { }
  getStudent():string[]
  {
    return this.students;
  }
}
