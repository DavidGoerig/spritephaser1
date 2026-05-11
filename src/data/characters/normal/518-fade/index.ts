import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 518,
  nom: `Fade`,
  element: 'Normal',
  classe: 'Tireur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Independent',
  description_physique: `Homme-Lien dont la signature elementaire est tellement ordinaire qu'elle disparait dans le bruit de fond. Les instruments de detection ne le capte pas. Les memoires ne le retiennent pas. Il existe, mais son existence n'enregistre pas dans les systemes construits pour percevoir les Elus.`,
  description_personnalite: `Mercenaire dont la valeur repose entierement sur son invisibilite systemique. Ne cherche pas la gloire, ni meme la reconnaissance. Travaille pour qui a un probleme precis a resoudre et qui ne peut pas se permettre de laisser de trace. Il tire. Le tir n'est relie a rien dans aucun registre.`,
  position_lore: `Anomalie du Calendrier des Fees qui a ete enregistree comme 'normal' et classee non-prioritaire, ce qui lui a donne une liberte que les autres Elus n'ont pas. Son element Normal, associe a une personnalite naturellement effacee, l'a rendu objectivement invisible aux systemes de surveillance. Vend ses services de precision a Virex et dans toute la region, dans une complète indetermination politique.`,
  style_combat: `Tire depuis des positions que les systemes de detection ne considerent pas comme des postes potentiels parce que sa signature elementaire n'y est pas perceptible. Sa presence est deniable meme apres le tir.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
