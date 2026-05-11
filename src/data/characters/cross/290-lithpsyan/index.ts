import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 290,
  nom: `Lithpsyan`,
  element: 'Roche',
  element2: 'Psy',
  classe: 'Escrimeur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Télékinésie géologique — déplace des masses rocheuses mentalement. Ses Colonnes surgissent de nulle part sous commande mentale. La montagne obéit à sa pensée.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses sorts Roche peuvent être lancés silencieusement (sans animation). Peut contrôler les Colonnes de loin via télékinésie (portée +5 cases).`,
};

export default character;
