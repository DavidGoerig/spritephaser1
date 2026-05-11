import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 456,
  nom: `Densite`,
  element: 'Gravite',
  classe: 'Battlemage',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Nereide d'une compacite physique surprenante : plus dense que son volume ne le laisserait supposer, propriete de son element qui lui donne une resistance aux impacts exceptionnelle. Porte l'uniforme imperial adapte aux operations sous haute pression, concu par les ingenieurs de Neris en collaboration avec l'Empire.`,
  description_personnalite: `Militant de la loi feerique qui croit que la gravite est un modele de gouvernance : elle s'applique uniformement, sans exception, a tout ce qui a une masse. Le Voile d'Equite aspire a la meme constance. Les Elus non enregistres sont des masses non comptabilisees dans le systeme.`,
  position_lore: `Formee dans les unites marines de l'Empire stationnees a Neris depuis le Silence des Vents. Son element Gravite lui permet de modifier sa propre densite pendant le combat, alternant entre une mobilite accrue et une resistance maximale. Applique la loi feerique dans les abysses de Thalassyr, zones que la confederation marchande considerait hors juridiction jusqu'a ce que l'Empire y installe des relais du Calendrier.`,
  style_combat: `Alterne entre une phase mobile de densite reduite et une phase defensive de densite maximale. Ses coups en haute densite laissent des impacts disproportionnes par rapport a leur vitesse apparente, brisant les defenses les plus solides.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
