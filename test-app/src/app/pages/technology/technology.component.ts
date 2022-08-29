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
  datasvarki ='';
  identifikator ='';
  markaosnovnogometala ='';
  diametrlist ='';
  tolshina ='';
  tipsoedinenia ='';

  test() {
    console.log(77);
    localStorage.setItem('zakazchik', this.zakazchik);
    localStorage.setItem('tuopo', this.tuopo);
    localStorage.setItem('programa', this.programa);
    localStorage.setItem('Sposob',this.Sposob);
    localStorage.setItem('datasvarki',this.datasvarki);
    localStorage.setItem('identifikator',this.identifikator);
    localStorage.setItem('markaosnovnogometala',this.markaosnovnogometala);
    localStorage.setItem('diametrlist',this.diametrlist);
    localStorage.setItem('tolshina',this.tolshina);
    localStorage.setItem('tipsoedinenia',this.tipsoedinenia);
  }
}