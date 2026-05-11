import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Capteur'];

export const personnage: Personnage = {
  id: 122,
  nom: 'Épine-Noire',
  element: 'plante',
  classe: 'Capteur',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Empire',
  niveau: 1,
  xp: 0,
  stats: {
    hp: modifs.hp,
    atk: modifs.atk,
    def: modifs.def,
    spe_atk: modifs.spe_atk,
    spe_def: modifs.spe_def,
    vit: modifs.vit,
  },
  description: {
    physique: `Sylvan au teint sombre, armé de ronces rétractables tressées dans ses avant-bras, yeux verts durs comme de l'écorce d'ébène.`,
    personnalite: `Traqueur efficace qui croit que la Faim des Racines prouve que les Élus Plante non-supervisés détruisent leur propre monde. Le Calendrier prévient cela.`,
    lore: `Épine-Noire traque les Élus Plante qui ont refusé l'enregistrement depuis la Faim des Racines. Il opère dans la tension politique de Leth'Var entre Conservateurs de la Sève et Gardiens de la Clairière — les deux factions locales se méfient de lui, mais l'Empire lui fournit une autorité qu'aucune des deux ne peut ignorer.`,
    combat: `Ronces de capture qui immobilisent sans blesser. Détection par lecture des réseaux racinaires locaux. Cage végétale pour contenir les Élus capturés.`,
  },
};
