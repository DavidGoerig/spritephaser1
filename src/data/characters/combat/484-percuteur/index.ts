import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 484,
  nom: `Percuteur`,
  element: 'Combat',
  classe: 'Plongeur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Homme-Lien d'une rapidite desorientante, corps adapte au deplacement en milieu dense : les zones d'anomalie elementaire de Virex, ou les lois physiques normales ne s'appliquent pas toujours, lui ont appris a se mouvoir dans des conditions changeantes. Ses cicatrices viennent de traversees de zones ou le temps ralentissait assez pour laisser des marques.`,
  description_personnalite: `Impulsif et loyal, specialise dans l'extraction rapide de situations impossibles. N'est pas un theoricien : il est celui qui arrive quand tout le monde est convaincu qu'il n'y a plus de sortie. Son don Combat lui permet de trouver les angles de deplacement que personne d'autre ne voit.`,
  position_lore: `Ancien coursier des reseaux clandestins de Virex, la ville ou tous les flux se croisent et ou les Dissidentes ont des reseaux profonds malgre la presence administrative massive de l'Empire. Son don s'est manifeste dans les zones d'anomalie temporelle de la Saturation des Elus, ou son sens du deplacement s'est affine dans des conditions physiques impossibles. Extrait les Elus des zones de surveillance en exploitant les memes anomalies que les Fées n'ont pas encore cartographiees.`,
  style_combat: `Plonge dans les zones les plus denses de surveillance en utilisant les angles de deplacement que les corps normaux ne peuvent pas suivre. Emerge de points improbables, depositant ses proteges avant que les Capteurs aient localise son point d'entree.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
