import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 521,
  nom: `Cohesion`,
  element: 'Normal',
  classe: 'Vanguard',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Convergence',
  description_physique: `Homme-Lien dont la presence semble federatrice : les individus autour d'elle ont tendance a se synchroniser malgre eux. Son element Normal s'exprime comme une force de cohesion collective. Porte les marques de la Convergence mais aussi celles de plusieurs cultures de passage a Virex, comme une carte de toutes ses conversions.`,
  description_personnalite: `Avant-garde de la Convergence dans la ville de toutes les confluences. Virex prouve que tous les elements peuvent coexister, dit-elle. La Convergence enseigne que coexister ne suffit pas : il faut redistribuer. Elle est la transition entre la coexistence passive de Virex et la redistribution active de la doctrine.`,
  position_lore: `Nee dans les quartiers de confluence de Virex, convertie a la Convergence par la logique simple suivante : si Virex demontre que tous les elements peuvent coexister, elle demontre aussi que ceux qui en accumulent plus que d'autres creent les anomalies de la Saturation. Son element Normal lui permet de lire les tensions collectives et d'orienter les groupes vers une coherence qui sert la doctrine de la Convergence.`,
  style_combat: `Coordonne les equipes de la Convergence en utilisant son element Normal pour synchroniser leurs actions. Sa presence sur le front transforme un groupe d'individus en un systeme coherent dont l'efficacite collective depasse la somme de ses parties.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
