import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
  
})
export class TechnologyComponent {

  title = 'test-app';
  zakazchik ='';
  tuopo ='';
  programa ='';
  Sposob ='';

  test() {
    console.log(77);
    localStorage.setItem('zakazchik', this.zakazchik);
    localStorage.setItem('tuopo', this.tuopo);
    localStorage.setItem('programa', this.programa);
    localStorage.setItem('Sposob',this.Sposob);
  }
}
