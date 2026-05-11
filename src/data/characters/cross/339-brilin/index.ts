import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 339,
  nom: `Brilin`,
  element: 'Fée',
  element2: 'Spectre',
  classe: 'Artillerie',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Dissidentes',
  description_physique: `Fées dont la nature Fée s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Fée/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Fée et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Frontière de l'Au-delà — ses sorts Fée guérissent les morts, ses sorts Spectre invoquent les vivants perdus. La résurrection est son domaine naturel. Miracle ramène les alliés depuis les Limbes.`,
  kit: ELEMENT_KITS['Fée'],
  modifications_classe: `Résurrection Partielle ramène des alliés à 100% PV (au lieu de 50%). Armée des Morts peut invoquer des alliés tombés depuis le début du combat.`,
};

export default character;
