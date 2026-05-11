import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 313,
  nom: `Larryax`,
  element: 'Dragon',
  element2: 'Spectre',
  classe: 'Artillerie',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon fantôme — partiellement incorporel. Ses Griffes traversent les armures. Son Vol Draconique le rend inciblable pendant le déplacement. Meurt-il vraiment ?`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Ses sorts Dragon peuvent être lancés depuis la forme spectrale (immunisé aux dégâts en transit). Vol Draconique active Passe-Muraille temporairement.`,
};

export default character;
