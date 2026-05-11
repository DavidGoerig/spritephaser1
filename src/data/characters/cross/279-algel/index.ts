import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 279,
  nom: `Algel`,
  element: 'Sol',
  element2: 'Psy',
  classe: 'Gardien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Psychokinésie de la terre — déplace mentalement des masses géologiques. Ses Soulèvements sont silencieux (pas d'avertissement). Le sol répond à ses pensées avant ses gestes.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses sorts Sol peuvent être lancés sans ligne de vue (perception souterraine). Soulèvement ne déclenche aucun avertissement sonore ou visuel.`,
};

export default character;
