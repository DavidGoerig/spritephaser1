import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 425,
  nom: `Nullistia`,
  element: 'Spectre',
  classe: 'Mage-Burst',
  espece: 'Aeride',
  region: 'Asterciel',
  faction: 'Independent',
  description_physique: `Aeride aux contours flous, comme si le monde avait du mal a decider de son epaisseur exacte. Sa signature elementaire spectrale est si intense qu'elle brouille les instruments de mesure a proximite. Porte des vetements qui semblent transparents par endroits, revelant une luminosite interne changeante.`,
  description_personnalite: `Puissance brute que ni l'Empire ni la Convergence ni les Dissidentes n'ont reussi a integrer. La Chute des Nuages l'a convaincue que les grandes structures institutionnelles s'effondrent au mauvais moment. Elle prefere agir seule, quand elle le decide.`,
  position_lore: `Nee lors de la reconstruction d'Heliora apres la Chute des Nuages, dans un quartier qui avait partiellement touche le sol. La confusion elementaire de cet evenement a marque sa naissance d'une signature spectrale exceptionnelle. Les Fees l'ont classee comme 'anomalie de puissance Spectre, risque de contagion elementaire'. Vit librement dans les hauteurs d'Asterciel, refusant l'aristocratie verticale comme les trois factions.`,
  style_combat: `Libere des eclats de neant spectral qui traversent les barrieres elementaires standards. Ses explosions effacent temporairement les signatures elementaires de tout ce qu'elles touchent, rendant les cibles momentanement invisibles aux systemes de detection allie et ennemi.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
