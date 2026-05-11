import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 432,
  nom: `Memorial`,
  element: 'Spectre',
  classe: 'Gardien',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Independent',
  description_physique: `Corps solide dont la peau est couverte de motifs spectraux ressemblant a des textes anciens : ce sont les signatures elementaires des Elus dont elle preserve la memoire, imprimees sur elle par des annees de contact. Elle porte physiquement le poids des archives d'Iskral qu'elle protege.`,
  description_personnalite: `Gardienne des archives, pas d'une ideologie. Protege ce qui peut encore etre preserve des tentatives d'effacement de l'Empire et des drains de la Convergence. N'a pas d'opinion sur qui a raison politique. A une opinion sur ce qui doit survivre.`,
  position_lore: `Ancienne gardienne des archives royales d'Iskral, devenue independante apres que l'Empire a tente de saisir les registres pre-Voile documentant les origines des Fees. Son don Spectre lui permet d'incorporer litteralement des signatures elementaires dans sa propre structure corporelle, les preservant de toute extraction ou effacement. Elle est devenue une archive vivante.`,
  style_combat: `Genere un champ de protection spectrale autour d'elle et de ses allies qui neutralise les tentatives d'extraction et de drain. Ses barrieres incorporent les signatures des Elus proteges, les rendant indiscernables des residus ambiants aux yeux des systemes de detection.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
