import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 433,
  nom: `Nexumorph`,
  element: 'Spectre',
  classe: 'Specialiste',
  espece: 'Inconnu',
  region: 'Multi-region',
  faction: 'Independent',
  description_physique: `Entite dont la forme physique semble agreger temporairement les signatures elementaires des zones qu'elle traverse. A Crysalme, elle ressemble a un Givrin. A Asterciel, a un Aeride. A Vel'Nox, a un Umbrien. Personne n'a jamais vu sa forme de base, si tant est qu'elle en ait une.`,
  description_personnalite: `Conscience collective des signatures des morts, ou anomalie unique qui a transcende son substrat physique au contact de trop de residus spectraux. N'est pas sure elle-meme de ce qu'elle est. Observe. Archive. Parfois intervient, selon des criteres que personne n'a dechiffres.`,
  position_lore: `Anomalie que le Calendrier des Fees classe comme 'entite spectrale non-incarnee, origine indeterminee'. Les archives d'Iskral contiennent une reference a une entite correspondant a sa description depuis au moins deux siecles avant le Gel Eternel. La Convergence souhaite l'etudier. L'Empire souhaite la cataloguer. Les Dissidentes pensent qu'elle est la preuve vivante que les Elus peuvent survivre au-dela de la mort physique.`,
  style_combat: `Manipule les signatures spectrales de zones entieres, reorganisant les residus elementaires en motifs qui desorganisent les systemes de detection adverses. Ses interventions transforment le champ de bataille en un environnement que seuls les porteurs de l'element Spectre peuvent lire clairement.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
