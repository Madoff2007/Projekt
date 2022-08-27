import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologyvik',
  templateUrl: './technologyvik.component.html',
  styleUrls: ['./technologyvik.component.scss']
})
export class TechnologyvikComponent implements OnInit{

  fio: string | null = '';


  ngOnInit() {
    this.fio = localStorage.getItem('fio');
    console.log(98765434567);
  }
}
