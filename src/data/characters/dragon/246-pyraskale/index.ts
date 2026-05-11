import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 246,
  nom: `Pyraskale`,
  element: 'dragon',
  classe: 'Battlemage',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',
  description: {
    physique: `Écailles d'un bleu-acier que les forges impériales ont partiellement fixées et renforcées via des procédés que la Citadelle ne rend pas publics. Il combat avec une épée intégrée entre deux rangd'es d'écailles au bras droit — une arme qui n'est pas portillée mais crue. L'Empire le présente comme la preuve que les Dragon Élus peuvent être utilisés, pas seulement contenus.`,
    personnalite: `Croit que l'Empire peut domestiquer les anomalies Dragon comme les Pyriens ont domestiqué le feu volcanique. Cette analogie lui semble évidente. Les Dissidentes la trouvent deeply fausse — domestiquer une anomalie du Calendrier, c'est précisément ce contre quoi ils se battent.`,
    lore: `Sert l'Empire comme démonstration vivante de ce qu'un Dragon Élu encadré peut accomplir — et comme argument contre la doctrine Dissidente selon laquelle les Dragon Élus doivent rester libres pour être utiles. Il a affronté Dragoryn une fois lors d'une mission. Le combat n'a pas eu de vainqueur clair. Les deux hommes se respectent et se combattent.`,
    combat: `Lame d'Écaille (frappe de mélée avec dégâts draconiques), Barrière de Carnage (bouclier d'écailles temporaire qui inflige des dégâts à toute attaque de mélée), Déflagration de Contact (explosion à courte portée liée au bras-lame). Passif Intégration Draconique : les dégâts reçus renforcent temporairement la prochaine attaque.`,
  },
  stats: ELEMENT_KITS['dragon']['Battlemage'],
  modificateurs: [],
};

export default character;
