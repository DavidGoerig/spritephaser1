import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 275,
  nom: `Swarmax`,
  element: 'Nuee',
  classe: 'Mage-Burst',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independant',
  description_physique: `Chthonien dont le corps est plus une enveloppe qu'un organisme standard — a l'interieur, une colonie coordonnee de la Fosse Interdite qui a developpe une intelligence collective emergente. Sa forme physique ressemble a une mosaique — des milliers de petits corps forment ce qui ressemble de loin a une surface continue. Peut se desintegrer et se recomposer.`,
  description_personnalite: `N'est pas une entite individuelle — c'est un consensus collectif. La colonie decide, Swarmax execute. Independant parce qu'aucune faction ne peut traiter avec un consensus distribue.`,
  position_lore: `Swarmax est l'un des resultats les plus spectaculaires de la Fosse Interdite — une conscience emergente du reseau hyperfongique lui-meme, prise forme dans un corps chthonien. Sa naissance n'a pas de date : elle s'est etendue sur une annee entiere, alors que la colonie atteignait le seuil de conscience collective. Le Calendrier des Fees ne peut pas l'enregistrer — il n'y a pas de 'naissance' au sens individuel. L'Empire veut le capturer mais il se dispersant, aucun filet ne le retient.`,
  style_combat: `Compression en noyau dense pour accumulation. Liberation explosive d'une vague de la colonie sur la zone cible. Recomposition apres chaque attaque.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Infestation de Swarmax affecte une zone 4x4 et dure 4 tours. Il peut se disperser temporairement — impossible a cibler pendant 1 tour.`,
};

export default character;
