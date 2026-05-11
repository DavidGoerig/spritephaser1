import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 247,
  nom: `Vrathax`,
  element: 'dragon',
  classe: 'Artillerie',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Grand, ailes vestigiales qui ne lui permettent pas le vol mais augmentent considérablement sa portée de projection via un mécanisme d'écaille-sail. Ses écailles sont d'un orange tereux — la couleur des formations draconiques les plus anciennes de Varkhôl, pré-forge. Combat depuis les hauteurs des arêtes volcaniques, hors de portée des Capteurs impériaux.`,
    personnalite: `Méthodique, patient, comporte une profonde satisfaction à proteger les Dissidentes depuis des positions que personne d'autre ne peut tenir. N'a pas besoin d'être sur la ligne de front pour être décisif. Ses positions sur les arêtes sont marquées sur les cartes internes de la Citadelle comme 'zones d'interdiction non-résolues'.`,
    lore: `A grandi sur les arêtes volcaniques de Varkhôl, dans des sites draconiques que l'Empire cartographiait mais n'habitait pas. Sa position actuelle dans les Dissidentes est née d'un pragmatisme : les Filles de la Forge impériales n'attaquent pas des positions où elles ne peuvent pas observer leurs pertes. Il observe les leurs depuis les hauteurs. Et tire.`,
    combat: `Souffre Lointain (boule de feu draconique à très longue portée, arc haut), Pluie d'Écailles (projectiles multiples sur zone), Inferno à Distance (brulüure persistante sur une zone choisie pendant 3 tours). Passif Angle Draconique : dégâts bonus depuis les cases surlevées.`,
  },
  stats: ELEMENT_KITS['dragon']['Artillerie'],
  modificateurs: [],
};

export default character;
