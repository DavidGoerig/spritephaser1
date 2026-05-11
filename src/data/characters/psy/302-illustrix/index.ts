import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 302,
  nom: `Illustrix`,
  element: 'Psy',
  classe: 'Enchanteur-Capteur',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Empire',
  description_physique: `Fee dont les capacites d'Illusion sont si developpees que ses propres traits changent legerement au cours d'une conversation — pas par magie consciente, par habitude profonde de malleabilite. Ses yeux changent de couleur entre les rencontres. Porte l'uniforme de Capteur le plus discret disponible.`,
  description_personnalite: `Fascinee par la question de ce qui est reel et ce qui est percu. Sert l'Empire parce qu'il lui donne acces a des sujets d'etude — des Elus Psy dont elle peut mesurer les reactions a ses constructions. Ce n'est pas de la cruaute : c'est de la science appliquee, selon elle.`,
  position_lore: `Illustrix est l'agente de captation psy la plus efficace de l'Empire a la Citadelle. Elle identifie les Elus Psy resistants au programme de captation en testant leurs reactions a ses Illusions — ceux qui les traversent ont un niveau de resistance mentale suffisant pour les programmes avances. Le Calendrier des Fees lui fournit les naissances probables d'Elus Psy a la Citadelle et dans la Confedration marchande de Thalassyr, qui produit de nombreux Nereides aux capacites mentales elevees.`,
  style_combat: `Illusions de terrain pour pieges de positionnement. Extraction Mentale pour epuiser les Elus Psy puissants. Cage Psychique pour immobiliser les cibles de captation.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Illusions ne peuvent pas etre percees par Telepathie passive standard. Peut maintenir 3 Illusions actives simultanement.`,
};

export default character;
