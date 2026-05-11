import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 338,
  nom: `Morisk`,
  element: 'Tenebres',
  classe: 'Tireur',
  espece: 'Peuple des Sables',
  region: 'Deserts',
  faction: 'Independent',
  description_physique: `Silhouette seche, peau brulee par les soleils croises du desert. Ses yeux ont une adaptation naturelle a la vision en lumiere nulle, heritage de ses ancetres qui vivaient dans les nuits profondes d'Ash'Rael. Porte des voiles legers adaptes a l'obscurite et a la chaleur simultanement.`,
  description_personnalite: `Mercenaire pur, sans allegeance doctrinale. Vient du desert mais refuse la Convergence : il a vu ce qu'ils font aux Elus qu'ils capturent lors des drains rituels, et ne servira pas un systeme qui traite les personnes comme des batteries. Paie pour tirer, pas pour croire.`,
  position_lore: `Ne a Ash'Rael dans une famille a la marge de la theocratie de la Convergence. Son eveil a l'element Tenebres a failli l'amener au Premier Drain rituel, mais il a fui avant la ceremonie. Depuis, il vend ses services dans toute la region, avec une preference pour les missions qui ne l'obligent pas a extraire des Elus au profit d'une faction.`,
  style_combat: `Tire dans l'obscurite avec une precision deconcertante, ses fleches d'ombre se courbant legerement vers les sources de chaleur pour compenser les longues distances. Peut maintenir une position invisible indefiniment dans le noir.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
