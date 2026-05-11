import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 460,
  nom: `Pesanteur`,
  element: 'Gravite',
  classe: 'Escrimeur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthonien massif dont les duels se pratiquent a une vitesse deliberement lente : chaque mouvement porte un surplus de masse gravitationnelle qui le rend irresistible. Son arme est une lame dont le poids peut etre multiplie par son element pendant l'impact.`,
  description_personnalite: `Dueliste qui croit que la force la plus lourde gagne toujours, et que l'ordre imperial est la force la plus lourde qui soit. La resistance est aussi futile que resister a la gravite. Le Voile d'Equite, dit-il, est simplement la force qui s'applique a tous sans exception.`,
  position_lore: `Forme dans la tradition dueliste des technocrates de Kar-Dum, qui resolvent les conflits par des joutes codifiees selon les lois de contribution. Son element lui permet d'amplifier le poids de ses coups de maniere variable. Patrouille les zones frontaleres d'Ormn-Dur pour le Bureau d'Application de l'Empire, avec une autorite particuliere dans les zones profondes.`,
  style_combat: `Dueliste de l'usure : chaque impact multiplie progressivement sa masse gravitationnelle, rendant ses attaques subsequentes de plus en plus lourdes. Les adversaires qui encaissent plusieurs coups sont progressivement immobilises par le surplus gravitationnel accumule.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
