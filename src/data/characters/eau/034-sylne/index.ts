import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Plongeur'];

export const personnage: Personnage = {
  id: 34,
  nom: 'Sylne',
  element: 'eau',
  classe: 'Plongeur',
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
    physique: `Néréide fine, peau grise des grandes profondeurs, cicatrice en spirale à l'épaule gauche — marque d'un filet féerique qui a failli la capturer. Aucun équipement superflu.`,
    personnalite: `Silencieuse, efficace. Elle n'explique jamais ses missions, ne cherche pas de validation, n'attend pas de gratitude. Chaque Élu extrait est une victoire contre le Calendrier.`,
    lore: `Sylne plonge dans les zones d'ombre de Thalassyr — passages sous-marins que le service de renseignement de la Citadelle ne cartographie pas — pour extraire des Élus que le Calendrier a localisés avant leur capture. Depuis le Silence des Vents et la reconstruction artificielle des courants par l'Élu Électrique, elle navigue dans une infrastructure partiellement surveillée. Elle a sauvé quatorze Élus cette année seule.`,
    combat: `Vitesse d'infiltration sous-marine maximale, dissimulation dans les courants troubles. Combat de précision en eaux obscures. Peut entraîner une cible dans les profondeurs pour créer un avantage fatal.`,
  },
};
