import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 12,
  nom: `Tarrath`,
  element: 'feu',
  classe: 'Gardien',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Large comme une porte. Bouclier de basalte volcanique fusionné directement à son bras gauche via un rituel de modification Dissident — il est désormais physiquement lié à leur cause par modification irréversible. Voix inhabituellement douce pour sa taille.`,
    personnalite: `Ne combat pas pour la Naissance du Besoin en tant que concept. Combat parce que des individus spécifiques — Brasia, Sirayx, Ashvrak — ont besoin qu'une chose ne les atteigne pas. Il est la chose qui ne les atteint pas.`,
    lore: `A passé douze ans à garder des planques Dissidentes dans les districts les plus surveillés de Khar-Vurn, sous les regards des Capteurs impériaux. L'Empire a envoyé des unités d'élite à sept reprises. Aucune n'a pénétré les positions qu'il tenait. Il n'explique jamais comment — la réponse serait de la philosophie, et il n'a pas de temps pour ça quand il doit tenir une porte.`,
    combat: `Ancrage Volcanique (immobilité bonus 2 tours), Endurcissement Magmatique (convertit un pourcentage des dégâts en armure), Contrechoc Brulant (redirige les dégâts absorbés sur l'attaquant).`,
  },
  stats: ELEMENT_KITS['feu']['Gardien'],
  modificateurs: [],
};

export default character;
