import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 288,
  nom: `Petel`,
  element: 'Roche',
  element2: 'Dragon',
  classe: 'Tireur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon de basalte — son Souffle génère de la lave solidifiée instantanément. Ses formations rocheuses sont d'origine volcanique. Sur ses cases Roche, il est aussi indestructible que la montagne.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Souffle Élémentaire crée des cases Roche/lave sur son trajet. Ses Écailles sont de basalte — résistance aux dégâts physiques doublée.`,
};

export default character;
