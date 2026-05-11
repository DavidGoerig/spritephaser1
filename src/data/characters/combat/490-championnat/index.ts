import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 490,
  nom: `Championnat`,
  element: 'Combat',
  classe: 'Escrimeur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',
  description_physique: `Homme-Lien dont la stature est celle d'un champion de competittion : presentable, impressionnant, chaque geste portant le poids de la representation institutionnelle. Porte l'uniforme des Escrimeurs imperiaux avec les insignes du Championnat de Virex, competition officielle sponsorisee par l'Empire pour legitimiser sa presence a Isthme.`,
  description_personnalite: `Croit que la loi feerique est la meilleure regle du jeu disponible et que les competitions officielles imperial sont une forme de justice meritocratique. Le Voile d'Equite distribue les Elus equitablement : le Championnat de Virex prouve que l'Empire recompense la competence. Son cynisme s'exprime dans l'espace entre ce qu'il dit en public et ce qu'il pense en prive.`,
  position_lore: `Champion des tournois officiels de Virex organises par l'Empire pour maintenir son emprise culturelle sur la ville de toutes les confluences. Sa victoire dans ces competitions lui a valu un recrutement dans les Escrimeurs imperiaux avec des avantages considerat : un enregistrement favorablle au Calendrier, une position sociale enviable. Il sait ce qu'il a accepte. Il a decide que ca valait le cout.`,
  style_combat: `Dueliste de representation qui utilise la legitimite du Championnat comme arme sociale autant que physique. Au combat, son element Combat lui permet d'anticiper les styles de n'importe quel adversaire : il a combattu tous les arts martiaux de Virex en competition.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
