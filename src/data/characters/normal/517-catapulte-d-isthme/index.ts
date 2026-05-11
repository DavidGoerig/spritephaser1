import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 517,
  nom: `Catapulte d'Isthme`,
  element: 'Normal',
  classe: 'Artillerie',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Homme-Lien dont les bras sont des architectures d'ingenierie martiale : chaque muscle, chaque tendon, chaque os a ete developpe avec une intention precise de propulsion maximale. Son element Normal lui permet de concentrer et de lancer des charges de puissance elementaire normalisee avec une force qu'aucun element unique n'atteint.`,
  description_personnalite: `Ingenieur du combat a distance qui croit que la meilleure facon de liberer Virex de la presence administrative imperiale est de demanteler systematiquement ses infrastructures de controle. Tire avec patience et methode, une infrastructure a la fois.`,
  position_lore: `Ancien ingenieur de construction de Virex qui a compris que ses competences de calcul structurel s'appliquaient aussi a la destruction. Son element Normal lui permet de concentrer toutes les forces elementaires presentes dans une zone en une charge unique normalisee, la projetant avec une puissance que chaque element pris separement ne produirait pas. A rejoint les Dissidentes apres avoir realise que la plupart des infrastructures qu'il construisait servaient la surveillance imperiale.`,
  style_combat: `Propulse des charges de puissance normalisee qui ne peuvent pas etre contrees par des protections elementaires specifiques : son element traite toutes les barrieres comme equivalentes et les traverse avec la meme facilite.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
