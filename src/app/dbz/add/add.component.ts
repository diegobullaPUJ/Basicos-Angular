import { Component, Input } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'

})
export class AddComponent {

  @Input() nuevo: Character = {
    name: '',
    power: 0
  };

  constructor(private dbzService: DbzService) {}

  add() {
    if (this.nuevo.name.trim().length === 0 && this.nuevo.power === 0) {
      return;
    }

    this.dbzService.addCharacter( this.nuevo );

    this.nuevo = {
      name: '',
      power: 0
    }

  }

}
