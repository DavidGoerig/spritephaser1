import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 229,
  nom: `Phancéon`,
  element: 'Eau',
  element2: 'Spectre',
  classe: 'Enchanteur-Soutien',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Noyade spectrale — ses eaux sont hantées. Les ennemis dans ses zones aquatiques entendent des voix et voient des apparitions. Ses fantômes nagent dans ses Inondations.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses cases Eau sont également des zones Spectre. Passe-Muraille peut traverser les surfaces d'eau sans déclencher ses propres effets.`,
};

export default character;
