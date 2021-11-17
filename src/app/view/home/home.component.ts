import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo_banner! : string;
  texto_corpo! : string;

  constructor() { }

  ngOnInit(): void {
    this.titulo_banner! = "Venha conhecer nosso diferencial!!!";

  }

}
