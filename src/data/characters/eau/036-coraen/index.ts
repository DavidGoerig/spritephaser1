import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Battlemage'];

export const personnage: Personnage = {
  id: 36,
  nom: 'Coraen',
  element: 'eau',
  classe: 'Battlemage',
  espece: 'Néréide',
  region: 'Thalassyr',
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
    physique: `Néréide grand et formel, armure de corail renforcé aux articulations d'argent, sceau du Voile d'Équité incrusté dans le plastron. Maintien impeccable en toutes circonstances.`,
    personnalite: `Bureaucratiquement brutal. Voit la force comme l'extension naturelle du droit et répugne à l'illégalité élémentaire autant qu'à l'illégalité civile. Sa politesse est réelle, sa dureté aussi.`,
    lore: `Coraen applique le droit maritime féerique dans les zones commerciales de Néris — la Confédération marchande neutre qui, depuis le Silence des Vents, est sous surveillance constante. Il a arrêté 47 Élus non-enregistrés l'année précédente. La Confédération proteste formellement ; l'Empire répond par des décrets. Coraen patrouille les routes sensibles.`,
    combat: `Combat de mêlée dans l'eau, boucliers liquides en armure active. Utilise les articles du droit féerique pour justifier chaque acte de force — parfois littéralement en les récitant pendant le combat.`,
  },
};
