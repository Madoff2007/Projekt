import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologyyk',
  templateUrl: './technologyyk.component.html',
  styleUrls: ['./technologyyk.component.scss']
})
export class TechnologyykComponent {

  title = 'test-app';

  Normativnidokyment1 = '';
  Normativnidokyment2 = '';
  Normativnidokyment3 ='';
  datasvarki ='';
  datakontrola ='';
  kontrolprovel ='';
  nomeprotokola ='';
  //pynkti1 ='';
  test() {
    console.log(77);
    localStorage.setItem('Normativnidokyment1', this.Normativnidokyment1); 
    localStorage.setItem('Normativnidokyment2', this.Normativnidokyment2);
    localStorage.setItem('Normativnidokyment3', this.Normativnidokyment3);
    localStorage.setItem('datasvarki', this.datasvarki);
    localStorage.setItem('datakontrola', this.datakontrola);
    localStorage.setItem('kontrolprovel', this.kontrolprovel);
    localStorage.setItem('nomeprotokola', this.nomeprotokola);
    //localStorage.setItem('pynkti1', this.Normativnidokyment1) 
  }
}
//let Normativnidokyment1 = "pynkti11";