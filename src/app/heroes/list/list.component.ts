import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent  {

  heroes:string[] = ['Spiderman', 'Ironman','Hulk', 'Thor'];
  deletedHero: string = '';


  deleteHero():void { 
    const deletedHero = this.heroes.pop();
    this.deletedHero = deletedHero || '';
  }

  


}
