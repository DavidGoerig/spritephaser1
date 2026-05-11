import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Gardien'];

export const personnage: Personnage = {
  id: 372,
  nom: 'Kalyptis',
  element: 'fee',
  classe: 'Gardien',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',
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
    physique: `Givrin massif dont l'aura féerique s'est stabilisée en bouclier permanent — une couche de lumière solide l'entoure en toutes circonstances.`,
    personnalite: `Protège ce qu'il a choisi. L'élément Fée lui confère une résistance aux manipulations idéologiques — il sait faire la différence entre une vérité et un argument.`,
    lore: `Kalyptis garde un fragment d'archive à Iskral que ni la monarchie rituelle ni la Citadelle ne savent exactement ce qu'il contient. Il ne travaille pour aucune faction et ne le fera pas. Les trois lui ont proposé des arrangements. Il a répondu non à chacune avec la même politesse.`,
    combat: `Bouclier féerique actif qui répond aux attaques en les absorbant. Résistance totale aux dégâts féeriques. Sa défense est quasi-impénétrable — l'attaquer épuise l'attaquant.`,
  },
};
