import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Soutien'];

export const personnage: Personnage = {
  id: 211,
  nom: 'Brise-Âme',
  element: 'vent',
  classe: 'Soutien',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Dissidentes',
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
    physique: `Aéride légère aux vêtements perpétuellement soulevés par son propre courant. Mains translucides qui canalisent le vent cicatrisant. Yeux gris clair comme ciel de tempête.`,
    personnalite: `Douce mais pas naïve. Elle pense que les soins appartiennent à ceux qui en ont besoin, pas à ceux que le Calendrier juge méritants.`,
    lore: `Brise-Âme soignait à Heliora dans les jours qui ont suivi la Chute des Nuages — quand les quartiers décrochés saignaient et que l'Empire traitait d'abord les niveaux supérieurs. Elle a soigné sans distinction. Les Dissidentes l'ont repérée et recrutée. Elle soigne maintenant les Élus Vent hors-Calendrier, spécialité : blessures d'extraction et de fuite.`,
    combat: `Courants cicatrisants qui enveloppent les alliés blessés. Barrières de vent qui dévient les attaques physiques. Si nécessaire, tourbillon défensif qui repousse les assaillants.`,
  },
};
