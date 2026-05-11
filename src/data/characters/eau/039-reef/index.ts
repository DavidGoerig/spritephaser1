import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Assassin'];

export const personnage: Personnage = {
  id: 39,
  nom: 'Reef',
  element: 'eau',
  classe: 'Assassin',
  espece: 'Néréide',
  region: 'Thalassyr',
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
    physique: `Néréide aux écailles noires des grandes profondeurs, quasi-invisible dans les eaux sombres. Laisse toujours une petite coquille-scarabée nacrée sur ses cibles après l'élimination.`,
    personnalite: `Froid et méthodique. Il voit les agents du Voile non comme des ennemis personnels mais comme des infrastructures humaines de contrôle — et les traite en conséquence.`,
    lore: `Reef travaille depuis le Silence des Vents sur une liste : les nœuds humains du réseau de surveillance féerique à Néris. Pas les soldats — les agents dont la mort crée une lacune irréparable dans la capacité de traçage. Six éliminés depuis l'événement. La Citadelle a envoyé des renforts. Reef attend.`,
    combat: `Invisibilité totale dans les eaux sombres. Courant électrisé localisé qui paralyse sans trace. Frappe mortelle sous-marine depuis l'angle mort de la cible.`,
  },
};
