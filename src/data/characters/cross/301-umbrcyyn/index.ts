import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 301,
  nom: `Umbrcyyn`,
  element: 'Vent',
  element2: 'Ténèbres',
  classe: 'Tireur',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Vent des ombres — invisible même au mouvement. Ses Rafales ne font aucun son. Son Cyclone obscur aspire la lumière autour de lui. Se déplace à la vitesse du vent dans les ténèbres.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Ses zones Vent génèrent des zones Ténèbres. Se déplacer dans ses zones de Vent/Ténèbres le rend invisible.`,
};

export default character;
