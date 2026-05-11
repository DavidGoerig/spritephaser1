import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Artillerie'];

export const personnage: Personnage = {
  id: 67,
  nom: 'Hiver Blanc',
  element: 'glace',
  classe: 'Artillerie',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin massif, blanc comme neige fraîche, canon improvisé sur l'épaule droite qui projette des blizzards ciblés. Cicatrices thermiques sur le bras gauche d'un accident de surcharge.`,
    personnalite: `Bruyant, enthousiaste pour la destruction d'infrastructures de contrôle. Voit le cycle de destruction-reconstruction comme une victoire d'usure.`,
    lore: `Hiver Blanc a localisé les nœuds de surveillance féerique dans les montagnes de Crysalme — des tours de cristal déguisées en formation naturelle qui captent les signatures élémentaires de la région. Il en a détruit deux. Les Fées les ont reconstruits en six semaines. Il les a détruits à nouveau. Un troisième cycle est en cours. Il estime que l'Empire finira par manquer d'ingénieurs de reconstruction.`,
    combat: `Blizzards ciblés à longue portée. Avalanches provoquées sur des angles calculés. Disruption thermique qui désactive les équipements de surveillance féeriques.`,
  },
};
