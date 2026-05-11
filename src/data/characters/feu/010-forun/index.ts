import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 10,
  nom: `Forgelix`,
  element: 'feu',
  classe: 'Escrimeur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',
  description: {
    physique: `Carrure classique de duelliste — élancé, posture puissante, toujours en position d'avant. Sa lame est forgée dans les feux des chambres profondes de Khar-Vurn, tient la chaleur comme un condensateur. L'Empire l'utilise aussi comme symbole public de compétence impulsant ordre — il n'est pas inconscient de cette fonction et la joue.`,
    personnalite: `Compétitif, formel, constitutionnellement incapable d'ignorer un défi à son honneur. N'a jamais refusé un duel en vingt ans. Croit sincèrement au Voile d'Équité : 'un monde sans règles produit des combattants sans discipline, et des combattants sans discipline massacrent.'`,
    lore: `Maître de l'école Lame-Flamme impériale de Khar-Vurn, qui traite le feu comme instrument de précision plutôt que de destruction brute — technique précisément cultivée par les Fées pour produire des gardiens de l'ordre qui ne laissent pas de dégâts collataux générant de la sympathie pour les Dissidentes. Il a formé dix-sept élèves. Trois ont rejoint les Dissidentes. Une statistique qu'il médite chaque année.`,
    combat: `Estocade Flamboyante (botte perçante à dégâts de chaleur), Riposte Ardente (contre qui accumule de la chaleur), Lame de Juge (frappe imparable à dégâts vrais quand la charge est pleine). Passif Maîtrise du Fil : taux critique croissant pour chaque coup consécutif sur la même cible.`,
  },
  stats: ELEMENT_KITS['feu']['Escrimeur'],
  modificateurs: [],
};

export default character;
