import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
  title = 'test-app';

  fio = '';

  test() {
    localStorage.setItem('fio', this.fio);
  }

}
