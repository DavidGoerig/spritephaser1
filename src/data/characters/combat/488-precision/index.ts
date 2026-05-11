import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 488,
  nom: `Precision`,
  element: 'Combat',
  classe: 'Tireur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Independent',
  description_physique: `Homme-Lien d'une economie corporelle absolue : pas un gramme de masse superflu, pas un mouvement inutile. Ses tirs n'ont pas besoin d'arme : son element Combat lui permet de projeter des impulsions de puissance pure avec une precision chirurgicale. Porte un equipement minimal, sa precision venant entierement de son entrainement.`,
  description_personnalite: `Mercenaire d'une ethique personnelle stricte qui refuse les contrats de capture d'Elus et ceux qui impliquent des dommages collecteraux. Tire pour resoudre des problemes precis, pas pour faire de la rhetorique par les armes. Sa reputation est basee sur le fait qu'il ne rate jamais sa cible intentionnelle et n'en touche jamais d'autre.`,
  position_lore: `Ancien formateur des academies militaires de Virex devenu independant quand l'Empire a commence a utiliser ces academies pour former des Capteurs plutot que des defenseurs. Son element Combat lui permet de concentrer des impulsions de puissance en projectiles de precision absolue. La Saturation des Elus de Virex lui a appris que dans un environnement ou toutes les forces physiques sont perturbees, la precision est la seule constante fiable.`,
  style_combat: `Projette des impulsions de puissance combat avec une precision qui ne laisse aucune marge d'erreur. Ses tirs traversent les barrieres elementaires en ciblant uniquement le point de vulnerabilite physique de la cible, independamment de ses protections elementaires.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
