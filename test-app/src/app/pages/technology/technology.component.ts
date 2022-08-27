import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  title = 'test-app';
  fio = '';
  klemo = '';
  zakazchik ='';
  tuopo ='';
  programa ='';
  Sposob ='';
  test() {
    console.log(77);
    localStorage.setItem('fio', this.fio);
    localStorage.setItem('klemo', this.klemo);
    localStorage.setItem('zakazchik', this.zakazchik);
    localStorage.setItem('tuopo', this.tuopo);
    localStorage.setItem('programa', this.programa);
    localStorage.setItem('Sposob',this.Sposob);
  }
}
