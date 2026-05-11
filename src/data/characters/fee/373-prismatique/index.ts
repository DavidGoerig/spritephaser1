import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Spécialiste'];

export const personnage: Personnage = {
  id: 373,
  nom: 'Prismatique',
  element: 'fee',
  classe: 'Spécialiste',
  espece: 'Givrine',
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
    physique: `Givrine dont la forme décompose la lumière ambiante en prismes — impossible de la regarder directement sans être ébloui. Sa signature élémentaire se lit comme tous les éléments à la fois.`,
    personnalite: `Phénomène de lumière autant qu'être vivant. Incompréhensible pour les systèmes de classification — y compris le Calendrier.`,
    lore: `Prismatique est née lors d'un alignement cosmique rare à Iskral — un événement que la caste des lecteurs de destin d'Heliora qualifie de 'conjonction féerique totale'. Elle est la manifestation la plus complète de l'élément Fée jamais enregistrée. La Citadelle la veut absolument. Elle est jusqu'à présent introuvable pour quiconque ne sait pas lire la lumière prismatique.`,
    combat: `Décomposition lumineuse totale de son environnement. Tous les éléments lui répondent partiellement — elle a un accès partiel à tous. Sa puissance est sans catégorie.`,
  },
};
