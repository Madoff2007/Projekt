import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologyvikdata',
  templateUrl: './technologyvikdata.component.html',
  styleUrls: ['./technologyvikdata.component.scss']
})
export class TechnologyvikdataComponent implements OnInit {

  fio: string | null = null;
  klemo: string | null = null;
  zakazchik: string | null = null;
  tuopo: string | null = null;
  programa: string | null = null;
  Sposob: string | null = null;
  Normativnidokyment1: string | null = null;
  Normativnidokyment2: string | null = null;
  Normativnidokyment3: string | null = null;
  
  ngOnInit() {
    console.log(98765434567);
    localStorage.getItem('fio');
    localStorage.getItem('klemo');
    localStorage.getItem('zakazchik');
    localStorage.getItem('tuopo',);
    localStorage.getItem('programa',);
    localStorage.getItem('Sposob');
    localStorage.getItem('Normativnidokyment1');
    localStorage.getItem('Normativnidokyment2');
    localStorage.getItem('Normativnidokyment3');
}
}
