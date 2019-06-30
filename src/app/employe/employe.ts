import {horaire} from './horaire.ts';
export const EMPLOYES: Employe[] = [
    {
        id: 1,
        nom: 'Antony',
        
    },
    {
        id: 2,
        nom: 'Cyril',
    },
    {
        id: 3,
        nom: 'Jessica',
    },
    {
        id: 4,
        nom: 'Philipe',
    },
    
]
export class Employe {
  id: number;
  nom: string;
  s1j1: horaire;
  s1j2: horaire;
  s1j3: horaire;
  s1j4: horaire;
  s1j5: horaire;
  s1j6: horaire;
  s2j1: horaire;
  s2j2: horaire;
  s2j3: horaire;
  s2j4: horaire;
  s2j5: horaire;
  s2j6: horaire;
}