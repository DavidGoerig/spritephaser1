import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 332,
  nom: `Onyx`,
  element: 'Tenebres',
  classe: 'Enchanteur-Capteur',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Empire',
  description_physique: `Corps taille dans la nuit, regard d'un gris acier sans fond. Ses iris ont une luminosite propre, artificielle : implants optiques acquis a la pharmacie noire de Vel'Nox pour ameliorer sa vision dans l'obscurite totale. Uniforme imperial discret, sans insigne apparent.`,
  description_personnalite: `Professionnel jusqu'a la froideur. N'est pas cruel, simplement efficace. Croit sincerement que les Elus non enregistres sont plus en danger hors du Voile qu'a l'interieur. A personnellement escorte quatorze Elus vers la Citadelle en les convainquant que c'etait leur interet.`,
  position_lore: `Agent imperial ne a Vel'Nox apres le Vol de la Lumiere, forme dans les methodes d'infiltration de la Guilde Grise avant que l'Empire ne retourne cette guilde a son service. Specialiste de la traque dans le noir : il utilise les memes techniques d'ombre que les Dissidentes pour les retrouver. Ses rapports au Calendrier sont precis et exhaustifs.`,
  style_combat: `Capte les signatures elementaires en mobilisant l'obscurite ambiante comme resonateur. Ses sorts de detection traversent les ecrans visuels : il voit ce que les yeux ne peuvent pas, localisant les Elus dissimules dans les recoins de Vel'Nox.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
