import { Component, OnInit } from '@angular/core';
import { Employe, EMPLOYES, Horaire } from './employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  heures: Horaire;
  employes: Employe[];

  constructor() { }

  ngOnInit() {
    this.employes = EMPLOYES;
    this.heures = this.creerDate(8, 30);    
    
  }
  afficherDate(date) {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  creerDate(heure, minute) {
    var date = new Date();
    date.setHours(heure);
    date.setMinutes(minute);
    return date;
  }

}