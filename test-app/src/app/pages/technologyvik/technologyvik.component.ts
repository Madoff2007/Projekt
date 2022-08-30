import {Component, OnInit} from '@angular/core';

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
  datakontrola ='';
  kontrolprovel ='';
  nomeprotokola ='';
  fio ='';
  klemo ='';
  
  ngOnInit(){
    this.test2();
    this.test3();
  }
  
  test() {
    console.log(77);
    localStorage.setItem('Normativnidokyment1', this.Normativnidokyment1); 
    localStorage.setItem('Normativnidokyment2', this.Normativnidokyment2);
    localStorage.setItem('Normativnidokyment3', this.Normativnidokyment3);
    localStorage.setItem('datakontrola', this.datakontrola);
    localStorage.setItem('kontrolprovel', this.kontrolprovel);
    localStorage.setItem('nomeprotokola', this.nomeprotokola);
    localStorage.setItem('fio', this.fio);
    localStorage.setItem('klemo', this.klemo);
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

    let num;

    num = 5;

    console.log(num);


  }
}
