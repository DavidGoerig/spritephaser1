import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 5,
  nom: `Pyronax`,
  element: 'feu',
  classe: 'Mage-Burst',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Independant',
  description: {
    physique: `Gaunt, yeux entièrement brulés blanc — signe d'une communion au feu trop profonde pour que le Calendrier puisse le dater correctement. Sa température corporelle dépasse le vivable en permanence. Gants résistants à la chaleur changés chaque semaine car ils carbonisent. Il n'a pas de cicatrices — ses blessures brûlent avant de se former.`,
    personnalite: `Sa signature dans le Calendrier est incompréhensible — ni Feu pur, ni Dragon, quelque chose entre les deux que les Fées ne savent pas classifier. Obsessionnel, précis, uniquement focalisé sur la perfection destructrice. Indépendant des trois factions par principe.`,
    lore: `Freelance incendiaire. Les Fées l'ont classé 'anomalie instable' et ont essayé de le capturer trois fois. Il a calciné leurs agents à chaque fois. La Convergence lui a proposé un contrat — il a refusé, jugeant la doctrine du drain rituellement bizàrre. Les Dissidentes l'utilisent ponctuellement pour détruire des infrastructures de surveillance impériale et le paient en information, pas en argent.`,
    combat: `Fissure Pyroclastique (explosion de sol retardée 2 tours, imparable), Orbes Enflammées (projectiles multiples), Consumation Finale (combustion localisée parfaite ne laissant que des cendres). Passif Surcharge d'Entropie : dégâts burst croissants par tour sans mouvement.`,
  },
  stats: ELEMENT_KITS['feu']['Mage-Burst'],
  modificateurs: [],
};

export default character;
