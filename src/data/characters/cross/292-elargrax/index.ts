import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 292,
  nom: `Élargrax`,
  element: 'Roche',
  element2: 'Fée',
  classe: 'Gardien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Pierre enchantée — ses formations rocheuses brillent de magie Fée. Ses Colonnes émettent de la lumière. Sa Fortification est bénite — les alliés derrière elle régénèrent.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses cases Roche diffusent Aura de Soin léger. Fortification enchatée : les alliés à l'intérieur régénèrent 5% de PV par tour.`,
};

export default character;
