import { BuiltinTypeName, TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
  
})
export class TechnologyComponent implements OnInit{

  title = 'test-app';
  zakazchik ='';
  tuopo ='';
  programa ='';
  Sposob ='';
  datasvarki ='';
  Protokol ='';
  identifikator: string[]=[];
  markaosnovnogometala: string[]=[];
  diametrlist: string[]=[];
  tolshina: string[]=[];
  tipsoedinenia: string[]=[];
  kolichestvoindentifikatorov ='';
  items: number[]=[];


  ngOnInit(){
    this.test2();
  
  }


  test() {
    console.log(77);
    localStorage.setItem('zakazchik', this.zakazchik);
    localStorage.setItem('tuopo', this.tuopo);
    localStorage.setItem('programa', this.programa);
    localStorage.setItem('Sposob',this.Sposob);
    localStorage.setItem('datasvarki',this.datasvarki);
    localStorage.setItem('Protokol', this.Protokol);
    //localStorage.setItem('identifikator',this.identifikator);
   // localStorage.setItem('markaosnovnogometala',this.markaosnovnogometala);
    //localStorage.setItem('diametrlist',this.diametrlist);
    //localStorage.setItem('tolshina',this.tolshina);
    //localStorage.setItem('tipsoedinenia',this.tipsoedinenia);
  }

  test2(){ 
    this.items= [];
    let a = this.kolichestvoindentifikatorov;
    let i;
    for (i=0; i<+a; ++i){
      this.items.push(i);
    }

  }
}