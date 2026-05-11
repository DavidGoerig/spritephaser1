import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 273,
  nom: `Scaramax`,
  element: 'Nuee',
  classe: 'Juggernaut',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthonien dont l'exosquelette insecte a fusionne avec sa propre derme en une carapace composite d'une resistance exceptionnelle — plaques de chitine d'un noir laque avec reflets verts, integration biologique complete aux terminaisons nerveuses. Stature massive, demarche qui imprime le sol.`,
  description_personnalite: `Bloc de certitude. La Convergence lui convient parce qu'il fonctionne comme un composant fiable d'un systeme plus grand — il s'integre, il performe, il tient. N'a jamais rate un objectif assigne.`,
  position_lore: `Scaramax a compris la doctrine de la Convergence par analogie avec la Fosse Interdite. Le reseau hyperfongique qui colonise les profondeurs d'Ormn-Dur depuis l'evenement est deja un systeme de redistribution biologique naturelle — il prend l'energie de ce qui meurt et la redistribue au reseau. C'est exactement ce que la Convergence fait avec les Elus. Sa signature Nuee est partiellement extraite et redistribuee dans des systemes biologiques a Ash'Rael. La technocratie de Kar-Dum le tolere — il contribue, c'est ce qui compte.`,
  style_combat: `Exosquelette Actif maximal en permanence. Charge frontale qui libere de l'energie biologique accumulee. Resistance aux drains par accoutumance.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Exosquelette Actif de Scaramax atteint 45% de reduction de degats. Chaque fois qu'il absorbe plus de 20% de ses PV max en un coup, gain permanent de Durcissement.`,
};

export default character;
