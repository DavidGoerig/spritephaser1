import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 402,
  nom: `Antidotrix`,
  element: 'Poison',
  classe: 'Gardien',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independent',
  description_physique: `Robuste et calme, peau de la meme couleur terreuse des profondeurs de Kar-Dum. Ses bras portent des bracelets d'antidote qu'elle peut activer d'une pression, systeme artisanal developpe apres des annees de travail dans les zones de la Fosse Interdite. Elle degage une legere odeur d'herbe amere.`,
  description_personnalite: `Protectrice pragmatique, garante de la sante des equipes qui travaillent dans les zones toxiques de Kar-Dum. N'est pas la pour l'ideologie. Est la pour que les gens qui entrent en sortent. Travaille pour quiconque requiert une protection contre les toxines, a condition que le contrat ne l'implique pas dans un raid contre des Elus.`,
  position_lore: `Ingenieure chimiste de la technocratie de contribution de Kar-Dum, specialisee dans les operations de la Fosse Interdite depuis que l'Elu Poison fondateur a apprivoise la zone apres le desastre. A developpe des protocoles de protection que l'Empire a tente de lui acheter. Elle a refuse, preferant rester independante. Ses antidotes sont les meilleurs disponibles dans toute la region d'Ormn-Dur.`,
  style_combat: `Genere des zones de neutralisation chimique qui protegent ses allies des poisons adverses. Sa presence sur le champ de bataille rend les strategies toxiques ennemies considerablement moins efficaces, protegeant meme les Elus vulnerables contre les tentatives de drain par toxine.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
