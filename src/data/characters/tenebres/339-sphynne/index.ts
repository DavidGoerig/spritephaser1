import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 339,
  nom: `Sphynne`,
  element: 'Tenebres',
  classe: 'Assassin',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Taille moyenne, corps d'une fluidite deconcertante : elle n'occupe jamais le meme espace deux fois. Ses vetements semblent faits d'ombre tissee, s'epaississant ou s'eclaircissant selon la lumiere ambiante. Les guildes imperiales de Vel'Nox ont trois silhouettes differentes dans leurs registres, toutes attribuees a la meme personne.`,
  description_personnalite: `Froide en mission, chaleureuse en dehors. Croit que certaines personnes doivent mourir pour que d'autres vivent librement, et assume ce choix sans romantisme ni culpabilite excessive. N'elimine pas par ideologie : elimine parce que quelqu'un de pire prendrait la place si elle ne le faisait pas.`,
  position_lore: `Ancienne archiviste des guildes noires de Vel'Nox, devenue assassin des Dissidentes apres qu'un agent imperial a liquide son reseau de protection d'Elus non enregistres. Cible en priorite les Capteurs et les agents du Bureau d'Application du Voile. Son nom n'apparait dans aucun registre du Calendrier des Fees, ce qui la rend invisible aux systemes de traque standard.`,
  style_combat: `Surgit d'une ombre, frappe, disparait. Ses attaques laissent une marque d'obscurite qui s'etend apres le coup, aveuglant temporairement la cible et isolant ses appels a l'aide dans un cone de silence elementaire.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
