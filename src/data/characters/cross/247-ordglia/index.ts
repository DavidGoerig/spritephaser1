import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 247,
  nom: `Ordglia`,
  element: 'Glace',
  element2: 'Normal',
  classe: 'Battlemage',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Empire',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Utilise la glace avec une économie parfaite. Chaque case créée a un but précis — pas de décor, pas de gaspillage. La toundra qu'il crée est fonctionnelle et létale.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses cases de glace durent 50% plus longtemps. Ses sorts Glace consomment 25% moins de ressources (efficacité normale).`,
};

export default character;
