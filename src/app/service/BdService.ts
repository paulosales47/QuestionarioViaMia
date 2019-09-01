import { PesquisaModel } from '../models/PesquisaModel';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class BdService {

    public SalvarPesquisa(pesquisa: PesquisaModel): void {
        firebase.database().ref(`pesquisa`).
            push({
                ChanceIndicacao: pesquisa.ChanceIndicacao,
                IndiceSatisfacao: pesquisa.IndiceSatisfacao,
                DataPesquisa: new Date().toISOString()
            },
                (result) => {
                    console.log(result);
                })
    }

}
