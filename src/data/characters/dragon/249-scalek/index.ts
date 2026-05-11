import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 249,
  nom: `Scalek`,
  element: 'dragon',
  classe: 'Assassin',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Écailles d'un noir-mineral qui absorbent la lumière — dans la pénombre ou contre des parois de pierre, Scalek devient visuellement absent. C'est une propriété passive de sa mutation draconique, pas une technique apprise. Fin et silencieux pour sa taille. Il manque deux écailles sur la joue gauche — artefact d'une tentative de capture impériale.`,
    personnalite: `Calibre moral singulier : élimine les agents impériaux qui traquent les Dragon Élus hors-Calendrier. C'est sa fonction, pas son identité. En dehors des missions, il est réservé, précis dans ses paroles, et possède une collection de fragments de pierre-dragon récupérés dans la Forge Silencieuse qu'il considère comme des reliques.`,
    lore: `La Citadelle a tenté de le capturer quatre fois. À chaque fois, les agents revenaient sans lui et avec des informations incomplètes sur ce qui s'était passé. Il ne tue pas les Capteurs — il les laisse revenir, parce qu'un Capteur qui revient raconte une histoire démoralisant pour l'Empire. Khossaëre (Capteur Dragon, Empire) est la seule personne qu'il considère comme un ennemi personnel plutôt qu'une fonction à contrer.`,
    combat: `Camouflage Draconique (invisibilité passive contre les surfaces de pierre), Frappe d'Écaille-Noire (dégâts garantis depuis la furtivité, ignore les boucliers), Enveloppement de Pierre (entoure la cible de débris draconiques, l'isolant de ses alliés). Passif Prédateur Ancestral : les attaques depuis l'invisibilité infligent des dégâts d'armure permanents.`,
  },
  stats: ELEMENT_KITS['dragon']['Assassin'],
  modificateurs: [],
};

export default character;
