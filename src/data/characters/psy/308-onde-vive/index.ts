import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 308,
  nom: `Wavex`,
  element: 'Psy',
  classe: 'Tireur',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Independant',
  description_physique: `Fee dont le pouvoir psy s'exprime exclusivement en ondes — vagues de pression mentale qui voyagent en trajectoires courbes impredictibles. Ses gestes de lancer definissent litteralement la trajectoire de l'onde dans l'air. Ses ailes sont repliees en permanence — elle concentre plutot qu'elle ne vole.`,
  description_personnalite: `Independante parce que son style de combat est trop impredictible pour une formation standard sans accidents. Prefere operer seule avec des cibles clairement designees.`,
  position_lore: `Wavex est une Fee de la Citadelle dont l'element psy s'est exprime en ondes plutot qu'en projections directes — une variante que le Calendrier a du mal a classifier. L'Empire a essaye de la recruter pour ses capacites anti-Dissidentes, sans succes. Les Dissidentes lui ont propose des missions regulieres — elle accepte quand leurs objectifs coincident avec le sien. Sa specialite dans les espaces complexes de la Citadelle, ou les projections en ligne droite sont bloquees, la rend particulierement utile pour les operations en interieur.`,
  style_combat: `Ondes qui contournent les couverts avec jusqu'a 2 changements de direction. Pression Mentale qui rebondit sur les surfaces. Precision sur plusieurs cibles alignees.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Sorts peuvent etre courbes. Pression Mentale peut rebondir une fois avant la cible. Jamais de tir en aveugle — elle voit toujours ou son onde arrive.`,
};

export default character;
