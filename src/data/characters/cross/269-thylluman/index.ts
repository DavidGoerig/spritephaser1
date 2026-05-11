import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 269,
  nom: `Thylluman`,
  element: 'Plante',
  element2: 'Fée',
  classe: 'Enchanteur-Capteur',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Empire',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Jardin enchanté — ses plantes portent des propriétés magiques Fée. Ses fleurs guérissent. Ses ronces bénissent autant qu'elles blessent. La Jungle Primordiale est un sanctuaire.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses cases Plante diffusent Aura de Soin aux alliés. Forêt Instantanée crée automatiquement un Sanctuaire à son centre.`,
};

export default character;
