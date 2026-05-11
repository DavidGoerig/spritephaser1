import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 462,
  nom: `Ancre`,
  element: 'Gravite',
  classe: 'Gardien',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independent',
  description_physique: `Chthonien d'une stabilite physique absolue : son element l'ancre au sol d'une facon que rien ne peut contrecarrer volontairement. Il ne tombe pas, ne recule pas, n'est pas projete. Il reste. Sa peau a la texture de la pierre profonde de Kar-Dum.`,
  description_personnalite: `Gardien sans ideologie, protecteur par nature plutot que par conviction politique. Ce qui lui tient lieu de philosophie : rien de ce qu'il couvre ne bougera. Travaille pour quiconque a besoin de quelque chose de fixe dans un monde qui change trop vite.`,
  position_lore: `Ingenieur des fondations de Kar-Dum, specialiste des structures en zone de haute pression tellurique. Son element s'est manifeste dans sa capacite a ancrer n'importe quelle structure au substrat rocheux de facon quasi-permanente. Apres la decouverte que ses fondations servaient aussi a installer les infrastructures de surveillance imperiale, il a refuse de continuer pour les deux parties.`,
  style_combat: `Genere un ancrage gravitationnel autour de lui et de ses allies qui les rend immovables aux projections et aux forces de deplacement adverses. Ses allies peuvent attaquer depuis une position fixe sans risque d'etre repousses ou desequilibres.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
