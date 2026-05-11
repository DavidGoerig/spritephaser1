import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 430,
  nom: `Exorciss`,
  element: 'Spectre',
  classe: 'Escrimeur',
  espece: 'Aeride',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Dueliste a la posture rigoureuse dont la lame semble partiellement translucide, traversee par des eclats de signatures elementaires spectrales. Son uniforme porte les insignes de la caste sacerdotale des lecteurs de destin d'Heliora, combinees aux marques des Escrimeurs imperiaux.`,
  description_personnalite: `Croit que les signatures des Elus morts sont des temoignages en faveur du systeme imperial : ils ont vecu proteges par le Voile, et leur memoire le confirme. L'Empire n'efface pas les morts. Il les integre a l'ordre cosmique.`,
  position_lore: `Forme a la fois dans l'ecole des duelistes imperiaux et dans la tradition sacerdotale des lecteurs de destin d'Heliora. La Chute des Nuages lui a appris que seul un systeme centralise peut gerer les crises elementaires. Son don Spectre lui permet de lire les dernieres intentions de combat de ses adversaires dans leurs signatures residuelles, anticipant leurs mouvements.`,
  style_combat: `Dueliste qui prevoit les attaques de l'adversaire en lisant ses intentions elementaires residuelles avant qu'elles ne se manifestent. Sa lame spectrale traverse les barrieres ordinaires et touche directement la signature elementaire de la cible.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
