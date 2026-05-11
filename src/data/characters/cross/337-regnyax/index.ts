import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 337,
  nom: `Regnyax`,
  element: 'Ténèbres',
  element2: 'Normal',
  classe: 'Mage-Burst',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',
  description_physique: `Umbriens dont la nature Ténèbres s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Ténèbres/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Ténèbres et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `L'Ordinaire des Ombres — utilise les ténèbres pour une discrétion parfaite sans jamais dépasser ce qui est nécessaire. Sa présence obscure est mesurée, jamais catastrophique.`,
  kit: ELEMENT_KITS['Ténèbres'],
  modifications_classe: `Ses zones de Ténèbres ne révèlent jamais sa position. Ses sorts Ténèbres consomment 25% moins — efficacité dans l'obscurité.`,
};

export default character;
