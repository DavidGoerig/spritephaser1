import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 401,
  nom: `Gorgatix`,
  element: 'Poison',
  classe: 'Vanguard',
  espece: 'Peuple des Sables',
  region: 'Deserts',
  faction: 'Convergence',
  description_physique: `Corps monumental marque des cicatrices du Premier Drain d'Ash'Rael. Ses yeux ont une teinte verdatre anormale, effet secondaire de son exposition prolongee aux toxines qu'il absorbe pour la Convergence. Ses veines sont proeminentes, violettes, pulsant sous une peau translucide.`,
  description_personnalite: `Avant-garde ideologique de la Convergence dans les zones toxiques. Le poison que votre corps produit appartient au monde, dit-il. Croit sincerement que les Elus Poison sont des systemes de distribution naturels qui ont simplement besoin d'etre reorientes vers le collectif.`,
  position_lore: `Ne a Ash'Rael, forme dans la doctrine du manque transfigure. La Convergence l'utilise comme avant-garde dans les zones chimiquement hostiles : son exposition aux toxines rituelles le rend partiellement immunise aux poisons naturels. Il precede les equipes de drain dans la Fosse Interdite et dans les forets de Sylvera pour neutraliser les defenses chimiques naturelles des Elus en fuite.`,
  style_combat: `Penetre dans les zones toxiques sans ralentissement, absorbant les poisons ambiants pour les retourner contre les ennemis. Sa presence en premiere ligne permet aux unites de drain de la Convergence de travailler en securite relative derriere lui.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
