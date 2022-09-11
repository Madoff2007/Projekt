import {Component, OnInit, ɵisDefaultChangeDetectionStrategy} from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-technologyvik',
  templateUrl: './technologyvik.component.html',
  styleUrls: ['./technologyvik.component.scss']
})
export class TechnologyvikComponent implements OnInit{

  title = 'test-app';

  Normativnidokyment1 = '';
  Normativnidokyment2 = '';
  Normativnidokyment3 ='';
  datakontrola: string[]=[];
  kontrolprovel ='';
  nomeprotokola: string[]=[];
  fio: string[]=[];
  klemo: string[]=[];
  kolichestvoindentifikatorov: string[]=[];
  kolichestvoprotokolov='';
  items: number[]=[];
  items2: number[]=[];
  nomerindentifikatora: string[]=[];
  
  
  ngOnInit(){
    this.test2();
    this.test3();
    this.test4();
    this.test5();
    this.test6();
  }
  
  test() {
    localStorage.setItem('Normativnidokyment1', this.Normativnidokyment1); 
    localStorage.setItem('Normativnidokyment2', this.Normativnidokyment2);
    localStorage.setItem('Normativnidokyment3', this.Normativnidokyment3);
    //localStorage.setItem('datakontrola', this.datakontrola);
    localStorage.setItem('kontrolprovel', this.kontrolprovel);
   // localStorage.setItem('nomeprotokola', this.nomeprotokola);
    //localStorage.setItem('fio', this.fio);
   // localStorage.setItem('klemo', this.klemo);
  }

  test2() {
    const a= [17,22,9,15,1]
    let cumma =0
    let countElementsArr = a.length;
    for (let i=0; i < a.length; i++){
    cumma= cumma+a[i];
    }
    console.log(cumma/countElementsArr);

  }

  test3(){
    this.items= [];
    let a = this.kolichestvoprotokolov;
    let i;
    for (i=0; i<+a; ++i){
      this.items.push(i);
    }

  }


  test4(){
    this.items2= [];
    let a = this.kolichestvoindentifikatorov;
    let i;
    for (i=0; i<+a; ++i){
      this.items2.push(i);
      
    }

  }

    test5(){


    }
    test6(){


      const a = [10,5,16,48,95,88,96,45,6,8,90,77,43,24,67,43,23,55,66,79,4,3,2,1,6,7,8,9,75,44,5,67]
      console.log(a)

      for ( let i = 0; i<a.length; i++){
        if (a[i] %2==0)
          console.log(a[i])
      }
  
      console.log(a.length);
       let cumm = 0
      for (const value of a){
        cumm += value;
      }
      console.log(cumm)

      console.log(cumm/a.length)

    };
  }

