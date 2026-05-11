import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 461,
  nom: `L'Avant-Garde Gravitationnelle`,
  element: 'Gravite',
  classe: 'Vanguard',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Nereide dont le corps semble en constant desequilibre controle : toujours penchee vers l'avant, comme aspiree par sa propre doctrine de l'aspiration collective. Sa silhouette est traversee de lignes de force gravitationnelle visibles, qui rayonnent vers l'exterieur.`,
  description_personnalite: `Avant-garde de la Convergence dans les zones de haute pression de Thalassyr. La gravite aspire tout vers le centre, dit-elle. La Convergence fait de meme avec l'energie des Elus. Ce n'est pas de la violence, c'est de la physique appliquee a la justice sociale.`,
  position_lore: `Nee dans les courants profonds de Thalassyr, convertie a la doctrine de la Convergence par des agents qui lui ont montre comment les abysses fonctionnent naturellement comme systemes de redistribution. Precede les equipes de drain dans les zones sous-marines de Neris, utilisant son element pour comprimer l'espace autour des Elus cibles et empecher leur fuite.`,
  style_combat: `Ouvre la voie en creant des corridors gravitationnels qui aspirent les ennemis vers elle et repoussent ses allies derriere. Sa presence redefinit la geographie du combat, forcant les adversaires a lutter contre la gravite elle-meme pour se positionner.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
