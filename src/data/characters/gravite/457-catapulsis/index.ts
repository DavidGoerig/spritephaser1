import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 457,
  nom: `Catapulsis`,
  element: 'Gravite',
  classe: 'Artillerie',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Long et sec, les bras disproportionnellement forts pour son gabarit : il les utilise comme vecteurs de propulsion gravitationnelle. Ses projectiles ne sont pas des objets physiques mais des compressions de gravite qu'il genere et lance avec une precision acquise dans les zones profondes d'Ormn-Dur.`,
  description_personnalite: `Ingenieur de la destruction des infrastructures imperiales de controle. Cible precisement les relais du Calendrier des Fees et les tours de surveillance en utilisant des projectiles gravitationnels qui n'ont pas de signature elementaire standard, rendant leur detection preventive impossible.`,
  position_lore: `Ancien ingenieur minier de Kar-Dum qui utilisait son element Gravite pour creuser des puits de forage avec une precision chirurgicale. Apres avoir decouvert que les chantiers qu'il dirigeait creaient les tunnels servant a l'infrastructure de surveillance imperiale dans Ormn-Dur, il a rejoint les Dissidentes et retourne ses competences de forage en technique de bombardement de precision.`,
  style_combat: `Lance des obus de gravite compressee qui s'effondrent sur impact, creant des zones de haute pression persistante. Ses bombardements sont particulierement efficaces contre les structures enterrees que l'Empire utilise comme relais du Calendrier dans les profondeurs d'Ormn-Dur.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
