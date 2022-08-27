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
  test() {
    console.log(77);
    localStorage.setItem('Normativnidokyment1', this.Normativnidokyment1);
    localStorage.setItem('Normativnidokyment2', this.Normativnidokyment2);
    localStorage.setItem('Normativnidokyment3', this.Normativnidokyment3);
  }
}