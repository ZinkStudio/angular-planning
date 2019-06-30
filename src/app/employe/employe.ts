import {Horaire} from './horaire.ts';
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
  s1j1: Horaire;
  s1j2: Horaire;
  s1j3: Horaire;
  s1j4: Horaire;
  s1j5: Horaire;
  s1j6: Horaire;
  s2j1: Horaire;
  s2j2: Horaire;
  s2j3: Horaire;
  s2j4: Horaire;
  s2j5: Horaire;
  s2j6: Horaire;
}