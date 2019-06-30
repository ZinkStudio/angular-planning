import { Component, OnInit } from '@angular/core';
import {employe,EMPLOYES,horaire} from './employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  heures:horaire;
  employes: employe[];

  constructor() { }

  ngOnInit() {
    this.employes = EMPLOYES;
    this.employes[0].s1j1.debut = this.creerDate(8, 30);
    this.employes[0].s1j1.fin = this.creerDate(19, 30);
  }

  afficherDate(date) {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  creerDate(heure, minute) {
    let date = new Date();
    date.setHours(heure);
    date.setMinutes(minute);
    return date;
  }

}