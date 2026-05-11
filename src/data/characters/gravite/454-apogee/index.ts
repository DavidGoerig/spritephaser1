import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 454,
  nom: `Apogee`,
  element: 'Gravite',
  classe: 'Plongeur',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Nereide dotee d'une mobilite exceptionnelle : son element lui permet de modifier localement la gravite pour se mouvoir a des vitesses et dans des directions impossibles. Ses vetements sont adaptes aux changements brusques d'orientation, et ses pieds ne touchent le sol que lorsqu'elle le decide.`,
  description_personnalite: `Rapide, joyeuse dans l'action, serieuse dans ses convictions. Extrait les Elus des zones de capture en leur faisant traverser des corridors de gravite alteree que les capteurs imperiaux ne peuvent pas anticiper. Refuse de rester immobile plus de quelques secondes.`,
  position_lore: `Nee dans les courants thermiques des abysses de Thalassyr, dans une zone ou les pressions contradictoires creent des bulles de gravite alteree naturelles. Son eveil elementaire lui a permis de maitriser ces bulles. Depuis le Silence des Vents, elle aide les Dissidentes a sortir les Elus de Neris par les routes sous-marines que les agents du Calendrier ne surveillent pas.`,
  style_combat: `Se deplace par bonds gravitationnels courts dont la trajectoire est impredictible pour un observateur exterieur. Plonge dans les zones de capture en emportant ses proteges dans un corridor de gravite alteree qui les propulse hors de portee des Capteurs.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
