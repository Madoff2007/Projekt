import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologyvik',
  templateUrl: './technologyvik.component.html',
  styleUrls: ['./technologyvik.component.scss']
})
export class TechnologyvikComponent {

  title = 'test-app';

  Normativnidokyment1 = '';
  Normativnidokyment2 = '';
  Normativnidokyment3 ='';
  datakontrola ='';
  kontrolprovel ='';
  nomeprotokola ='';
  fio ='';
  klemo ='';
  
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
  }
