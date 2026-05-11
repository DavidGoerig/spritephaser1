import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 482,
  nom: `Protocole`,
  element: 'Combat',
  classe: 'Enchanteur-Capteur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',
  description_physique: `Homme-Lien d'une ordonnance physique presque artificielle : chaque geste suit un protocole etabli, chaque position correspond a une procedure. Porte l'uniforme imperial avec des annotations manuscrites en marge, notant en permanence les signatures de combat des individus qu'il observe.`,
  description_personnalite: `Bureaucrate du combat. Croit que l'enregistrement est la forme la plus avancee de la civilisation. Les Elus non enregistres ne sont pas libres : ils sont des variables non controolees dans un systeme qui a besoin de toutes ses variables pour fonctionner. L'Empire leur offre une forme.`,
  position_lore: `Technicien de la surveillance de Virex forme par l'administration imperiale massive qui a une presence administrative dense dans cette ville de passage. Son don Combat lui permet de lire les signatures physiques des combattants comme des textes : il detecte l'element d'un Elu a la facon dont son corps se deplace, avant meme qu'il utilise ses capacites. Recense les Elus de Virex pour le Calendrier, profitant du flux de passage de la ville.`,
  style_combat: `Identifie les Elus par leur signature de mouvement avant qu'ils ne se revelent elementairement. Ses rapports de capture sont les plus precis du Bureau d'Application dans la region d'Isthme, car il lit le corps avant l'element.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
