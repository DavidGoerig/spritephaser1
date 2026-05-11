import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 485,
  nom: `Berserkat`,
  element: 'Combat',
  classe: 'Mage-Burst',
  espece: 'Pyrien',
  region: 'Varkhol',
  faction: 'Independent',
  description_physique: `Pyrien dont la signature Combat en eruption laisse des traces visibles sur son propre corps : brulures legeres, micro-fractures qui se cicatrisent immediatement, veines saillantes d'une intensite hors norme. Ses yeux passent du marron ordinaire a un dorado intense lors des eruptions les plus violentes.`,
  description_personnalite: `Explosif et instable, refuse toute domestication. A ete recrute par le Parti du Feu, par la Convergence, par les Dissidentes. A refuse les trois parce qu'il ne veut pas que sa puissance soit un argument dans une guerre qui n'est pas la sienne, mais ne peut pas s'empecher d'intervenir quand quelque chose lui semble injuste.`,
  position_lore: `Ne dans les forges de Khar-Vurn, son eveil a l'element Combat s'est produit lors d'un accident industriel qui a detruit une section entiere d'une forge. Les Fees l'ont classe 'anomalie de puissance classe A' : priorite de capture maximale. Il vit depuis en evitant simultanement les Capteurs imperiaux et la Convergence qui voudrait utiliser ses eruptions comme rituel de drain. Sa puissance combat est authentiquement la sienne.`,
  style_combat: `Libere des eruptions de puissance combat brute qui n'obeissent a aucune technique formelle. Devastatrices en zone rapprochee, elles rendent ses alliees aussi vulnerables que ses ennemis si mal controlees.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
