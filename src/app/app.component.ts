import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { BdService } from './service/BdService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private bd: BdService
  ) { }

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyCHNeZ-DnYx0NgIEJlTtV1TCRGoYupESCY",
      authDomain: "questionarioviamia.firebaseapp.com",
      databaseURL: "https://questionarioviamia.firebaseio.com",
      projectId: "questionarioviamia",
      storageBucket: "questionarioviamia.appspot.com",
      messagingSenderId: "1081072714902",
      appId: "1:1081072714902:web:3f85c129805f39c6"
    }
    firebase.initializeApp(firebaseConfig);
  }

  exibirQuestao1: boolean = true;
  exibirQuestao2: boolean = false;
  exibirAgradecimento: boolean = false;

  IndiceSatistacao: number;
  ChanceIndicacao: number;

  MarcarSatisfacao(indice: number): void {
    this.IndiceSatistacao = indice;
    this.exibirQuestao1 = false;
    this.exibirQuestao2 = true;
  }

  MarcarChanceIndicacao(chance: number): void {
    this.ChanceIndicacao = chance;
    this.exibirQuestao2 = false;
    this.exibirAgradecimento = true;

    setTimeout(() => {
      this.VoltarTelaInicial();
    }, 10000);

    this.bd.SalvarPesquisa({
      IndiceSatisfacao: this.IndiceSatistacao,
      ChanceIndicacao: this.ChanceIndicacao
    });

  }

  VoltarTelaInicial(): void {
    this.exibirAgradecimento = false;
    this.exibirQuestao1 = true;
  }

}



