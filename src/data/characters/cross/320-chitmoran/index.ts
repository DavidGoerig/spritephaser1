import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 320,
  nom: `Chitmoran`,
  element: 'Insecte',
  element2: 'Poison',
  classe: 'Enchanteur-Soutien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maître de l'infestation toxique. Ses insectes transportent des toxines mortelles. Chaque piqûre empoisonne. L'Essaim de Mort — insectes+venin — est le sort de zone le plus dangereux.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Chaque piqûre applique automatiquement Venin Paralytique maximal. Reine des Essaims libère une Pandémie à chaque invocation.`,
};

export default character;
