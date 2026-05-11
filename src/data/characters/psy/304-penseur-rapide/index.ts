import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 304,
  nom: `Novaex`,
  element: 'Psy',
  classe: 'Plongeur',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Dissidentes',
  description_physique: `Fee dont la vitesse de traitement psy est poussee au-dela des limites habituelles au prix d'une instabilite chronique — ses pensees vont trop vite pour que son corps les suive. Ses yeux bougent independamment, traquant des informations differentes. Elle vit deux ou trois secondes dans le futur de sa propre action.`,
  description_personnalite: `Le Plongeur psy qui arrive avant que l'ennemi sache qu'il est attaque. Difficile a gerer comme alliee car elle prend des initiatives avant que les autres aient fini de planifier. Elle a raison suffisamment souvent pour que les Dissidentes aient appris a la suivre.`,
  position_lore: `Novaex est une ancienne lectrice du Calendrier des Fees — elle aidait a interpreter les tables de prediction pour la Citadelle. Sa vitesse de traitement psy lui permettait de lire les tables a une vitesse que les autres interpretantes ne pouvaient pas egaler. Elle a utilise cette meme vitesse pour identifier les falsifications dans les tables — les ajustements imperials qui manipulent les predictions pour concentrer les naissances d'Elus dans des familles alignees avec l'Empire. Elle a rejoint les Dissidentes et transmet maintenant ces informations sur les naissances a proteger.`,
  style_combat: `Telepathie pour les fenetres de vulnerabilite adverses. Swap instantane sur la cible. Extraction Mentale immediate. Pression Mentale pour creer de la distance. Sortie via Illusion.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Swap instantane sans temps de cast. Peut chainer Swap + Extraction Mentale dans le meme tour. Agit en premier dans chaque tour.`,
};

export default character;
