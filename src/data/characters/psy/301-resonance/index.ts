import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 301,
  nom: `Veylith`,
  element: 'Psy',
  classe: 'Enchanteur-Soutien',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Dissidentes',
  description_physique: `Fee dont la maitrise telepathique a modifie sa physiologie — ses tempes ont developpe des bulbes de tissu neural supplementaires visibles sous la peau. Ses cheveux argentees flottent dans un champ psy permanent. Ses yeux sont d'un violet profond qui vire au blanc pur lors des connexions. Sa peau porte des cicatrices en arborescences — traces des connexions les plus intenses.`,
  description_personnalite: `Empathique jusqu'a l'epuisement structurel — elle ressent litteralement les etats emotionnels de ses allies. A rejoint les Dissidentes quand elle a telepathiquement touche un Elu capture lors d'une operation imperiale et senti exactement ce que la captation faisait. Apres ca, pas de choix.`,
  position_lore: `Ancienne employee de la Citadelle du Voile, Veylith coordinait les communications telepathiques du Calendrier des Fees — les flux d'information qui permettent a la Citadelle de predire les naissances d'Elus. Quand elle a realise que ces flux servaient aussi a localiser et capturer les Elus nes hors-registre, elle a rejoint les Dissidentes. Elle est maintenant la coordinatrice telepathique des brigades dissidentes a la Citadelle, gerant les communications entre unites dispersees sans que l'Empire puisse intercepter.`,
  style_combat: `Telepathie passive partage son champ de vision avec tous ses allies — carte de situation permanente. Swap pour repositionner les allies en danger. Reconstruction sur les allies les plus blesses.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Telepathie de Veylith active en permanence sans cout PM. Swap peut repositionner 2 allies simultanement. Reconstruction soigne 40% des PV max.`,
};

export default character;
