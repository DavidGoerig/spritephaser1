import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 483,
  nom: `Marteau de Fer`,
  element: 'Combat',
  classe: 'Juggernaut',
  espece: 'Pyrien',
  region: 'Varkhol',
  faction: 'Convergence',
  description_physique: `Pyrien massif dont les epaules semblent porter plus que son propre poids : la doctrine de la Convergence y est inscrite en cicatrices rituelles. Ses poings sont les armes d'un homme qui a appris a frapper avant de savoir quoi proteger, et qui a ensuite decide que frapper pour le collectif etait la seule justification valable.`,
  description_personnalite: `Croit que le combat est une ressource collective comme n'importe quelle autre : sa puissance de frappe appartient a ceux qui en ont besoin, pas a lui seul. La Convergence lui a donne un cadre pour une conviction qu'il avait avant de les rejoindre : personne ne devrait accumuler une force que d'autres n'ont pas.`,
  position_lore: `Ne a Khar-Vurn dans le quartier ouvrier du Parti du Feu, enfant de forgerons qui ont vu leurs lignees d'Elus confisquees par le Calendrier pour les redistribuer vers d'autres regions. A rejoint la Convergence non par ideologie abstraite mais par reaction directe : si les Fees peuvent prendre les Elus de Varkhol pour les donner ailleurs, il peut prendre sa puissance de combat et la donner a la doctrine qui reequilibre le monde.`,
  style_combat: `Juggernaut de corps-a-corps qui utilise chaque impact comme amplificateur du suivant. Sa doctrine de combat reflette la Convergence : il absorbe les coups adverses et les transforme en puissance, redistribuant l'energie recue sous forme de frappe devastatrice.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
