import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 214,
  nom: `Ciniel`,
  element: 'Feu',
  element2: 'Spectre',
  classe: 'Gardien',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Feu spectral qui traverse les résistances physiques. Ses flammes fantômes brûlent l'énergie vitale directement, ignorant les armures. Seule la lumière Fée peut les éteindre.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Ses sorts Feu ignorent 50% de l'armure physique (dégâts spectraux). Peut traverser les murs via Passe-Muraille en laissant un sillage de feu spectral.`,
};

export default character;
