import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologyvikdata',
  templateUrl: './technologyvikdata.component.html',
  styleUrls: ['./technologyvikdata.component.scss']
})
export class TechnologyvikdataComponent implements OnInit {

  title = 'test-app';
  
  fio: string | null = null;
  klemo: string | null = null;
  zakazchik: string | null = null;
  tuopo: string | null = null;
  programa: string | null = null;
  Sposob: string | null = null;
  Normativnidokyment1: string | null = null;
  Normativnidokyment2: string | null = null;
  Normativnidokyment3: string | null = null;
  datasvarki: string | null = null;
  datakontrola: string | null = null;
  kontrolprovel: string | null = null;
  nomeprotokola: string | null = null;
  //pynkti1: string | null = null;
  
  ngOnInit() {
    console.log(98765434567);
    this.fio=localStorage.getItem('fio');
    this.klemo=localStorage.getItem('klemo');
    this.zakazchik=localStorage.getItem('zakazchik');
    this.tuopo=localStorage.getItem('tuopo');
    this.programa=localStorage.getItem('programa');
    this.Sposob=localStorage.getItem('Sposob');
    this.Normativnidokyment1=localStorage.getItem('Normativnidokyment1');
    this.Normativnidokyment2=localStorage.getItem('Normativnidokyment2');
    this.Normativnidokyment3=localStorage.getItem('Normativnidokyment3');
    this.datasvarki=localStorage.getItem('datasvarki');
    this.datakontrola=localStorage.getItem('datakontrola');
    this.kontrolprovel=localStorage.getItem('kontrolprovel');
    this.nomeprotokola=localStorage.getItem('nomeprotokola');
    //this.pynkti1=localStorage.getItem('pynkti1');
}
}
