import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 514,
  nom: `Coureur`,
  element: 'Normal',
  classe: 'Plongeur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Homme-Lien d'une rapidite desarmante, capable de traverser les zones d'anomalie temporelle de Virex sans ralentissement apparent. Son corps s'est adapte aux conditions physiques variables de la Saturation : les zones ou le temps ralentit ne le ralentissent pas, les zones d'accelération ne l'accelerent pas.`,
  description_personnalite: `Coureur de reseaux clandestins, specialise dans le transport d'information et de personnes a travers les zones d'anomalie de Virex que la surveillance imperiale ne sait pas lire. Ne theorise pas sur la politique : court. La politique, c'est ce qu'il transporte. Lui, il court.`,
  position_lore: `Messenger des reseaux des Dissidentes a Virex, exploitant les zones d'anomalie temporelle de la Saturation des Elus pour traverser des espaces surveilles sans etre detecte. Son element Normal lui a permis de developper une resistance aux effets des anomalies qui lui permet de courir la ou d'autres se figent ou s'accelerent involontairement. Connait chaque couloir, chaque anomalie, chaque zone aveugle de Virex.`,
  style_combat: `Plonge dans les zones d'anomalie elementaire de Virex a une vitesse que son element Normal lui permet de maintenir constante malgre les conditions physiques variables. Ses proteges traversent avec lui, proteges de l'anomalie ambiante par sa normalisation en deplacement.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
