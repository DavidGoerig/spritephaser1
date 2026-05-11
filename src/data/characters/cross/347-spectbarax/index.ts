import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 347,
  nom: `Spectbarax`,
  element: 'Spectre',
  element2: 'Gravité',
  classe: 'Enchanteur-Capteur',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Empire',
  description_physique: `Givrins dont la nature Spectre s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Spectre/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Spectre et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Effacement de l'existence — combine le vide spectral et l'effacement gravitationnel. Ses cibles dans ses zones combinées n'existent plus vraiment. Collapse Spectro-Gravitationnel.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: `Ses zones Spectre génèrent de l'anomalie gravitationnelle. Dimension Spectrale sous Haute Gravité compresse l'espace — les cibles sont inévitablement attirées.`,
};

export default character;
