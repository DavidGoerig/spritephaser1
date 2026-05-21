// ============================================================
//  YSSARA — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 5 | Feu | Pyriens | Dissidentes | Assassin
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [V] 7 ans, brûlures 40% corps
//  ⚠ PUR FEU — cible de la chasse pour l'Avatar Total
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 5,
  nom: 'Yssara',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Petite — un mètre soixante-deux — mais construite d'une façon qui ne correspond pas à sa taille. Elle se déplace comme quelqu'un de plus grand : économie absolue de gestes, aucun mouvement inutile, une présence qui prend plus de place que son corps. Les Pyriens qui la rencontrent pour la première fois regardent ses mains en premier, sans savoir pourquoi.`,
    peau: `Les brûlures couvrent quarante pour cent de sa surface corporelle — épaule droite, flanc droit, l'intégralité du bras droit jusqu'au coude, la cuisse gauche, une section de la nuque. La peau brûlée a cette qualité particulière des grandes brûlures soignées : tendue, brillante aux zones cicatrisées, d'une teinte rose-bordeaux plus claire que le reste de sa peau Pyrienne naturellement rouge-brun. Elle ne les cache pas et n'en parle pas.`,
    yeux: `Rouge profond — la teinte la plus foncée possible pour un Pyrien. Presque brun-rouge dans la lumière ordinaire, presque orange dans la chaleur. Ses yeux font quelque chose de particulier quand elle fixe quelqu'un : ils ne clignotent pas au rythme habituel. Elle a appris à contrôler ça. Elle ne contrôle pas toujours.`,
    cheveux: `Noir de jais, longs, maintenus serrés contre la nuque en deux tresses parallèles. Pas par coquetterie — parce que les cheveux libres sont un risque opérationnel. Elle a brûlé ses cheveux lors d'une mission il y a trois ans. Ils ont repoussé. Elle les a gardés longs.`,
    vetements: `Vêtements sombres, superposés, sans insigne. Pas de rouge, jamais — trop visible à Khar-Vurn où le rouge signale une appartenance. Elle a une veste d'extérieur noire imperméable au vent et à la chaleur radiante. Dessous, selon la mission : tenues de travail anonymes qui pourraient appartenir à n'importe qui dans n'importe quel district.`,
    signes_particuliers: `Son Feu. Pas une caractéristique physique — une présence. Quand Yssara laisse son élément à la surface, les gens à proximité font un pas en arrière sans comprendre pourquoi. L'air autour d'elle est légèrement plus chaud. Ce n'est pas intense, ce n'est pas spectaculaire. C'est constant. Une chaleur qui ne s'éteint jamais complètement, même quand elle dort. Quelque chose d'indissociable d'elle — pas un pouvoir qu'elle utilise, une condition qu'elle porte.`,
  },

  psychologie: {
    dominante: `Yssara a sept ans dans son corps et trente dans ses yeux. La Rupture l'a traversée au sens littéral — quarante pour cent de sa surface corporelle. Ce qui reste de cette expérience n'est pas de la haine, pas de la peur, pas du trauma au sens clinique. C'est une clarté. Elle sait précisément ce que le Feu mal dirigé fait aux corps. Et elle sait précisément ce que les Capteurs impériaux font aux Élus non enregistrés. Ces deux savoirs se tiennent ensemble dans sa tête d'une façon qu'elle n'explique à personne.`,
    contradictions: `Elle est Feu. Le Feu l'a brûlée à sept ans. Elle utilise le Feu pour traquer des gens. La cohérence de sa position n'est pas évidente de l'extérieur. Elle ne cherche pas à la rendre évidente. L'incohérence apparente est un avantage opérationnel — les gens qui la voient s'attendent à ce qu'une Pyrienne brûlée ait un rapport traumatique au feu. Elle n'en a pas.`,
    peur: `Être arrêtée avant d'avoir fini. Pas la mort — l'interruption. Elle a une liste.`,
    desir: `Que les Élus non enregistrés aient le temps de vivre leur vie sans être chassés. Elle a une façon très concrète de contribuer à ça.`,
    rapport_au_pouvoir: `Son Feu est le plus pur et le plus intense que les Dissidentes aient vu chez un Pyrien en trente ans. Ce n'est pas une question d'entraînement — c'est une question d'essence. Son élément est dans chaque cellule d'une façon qui dépasse la biologie normale des Pyriens. Elle brûle légèrement, constamment, de l'intérieur vers l'extérieur. Les missions les plus intenses ne la fatiguent pas comme les autres — elles la soulagent temporairement, comme si libérer du Feu soulageait une pression interne permanente.`,
  },

  histoire: {
    origine: {
      titre: 'Sept ans dans le Quatrième District',
      texte: `Yssara est née dans le Quatrième District de Khar-Vurn, dans une famille de forgerons sans certification Parti de l'Acier. Ses parents fabriquaient des pièces mécaniques secondaires — des composants qui entraient dans les assemblages plus grands sans que leurs noms n'apparaissent jamais sur les contrats.

Enfant, elle aimait regarder les forges. Pas par fascination du danger — par affinité. Elle mettait sa main près des flammes plus longtemps que les autres enfants avant de la retirer. Ce n'était pas de la bravade. C'était une curiosité qui ne fonctionnait pas tout à fait normalement.

Sa mère avait remarqué. Elle n'avait rien dit.`,
    },
    eveil: {
      titre: 'Quarante pour cent',
      texte: `Elle avait sept ans le jour de la Rupture. Elle jouait dans l'escalier de service entre les conduits du Quatrième District quand la surtension a commencé. Ce qu'elle se rappelle : une chaleur différente de toutes les chaleurs qu'elle connaissait. Pas la chaleur des forges qui chauffe progressivement. Une chaleur instantanée, totale, sans direction.

Elle s'est réveillée trois jours plus tard dans un poste de soin provisoire. Elle avait les brûlures sur quarante pour cent du corps. Brasia (id:1) était l'une des praticiennes qui l'ont soignée. Yssara ne s'en souvient pas — elle avait sept ans et elle était sous analgésiques — mais elle sait maintenant que c'était elle.

Le Feu de sa propre nature n'avait pas protégé sa peau. Mais il avait survécu à tout le reste. Il était peut-être plus fort après.`,
    },
    rupture: {
      titre: 'La liste',
      texte: `Yssara avait dix-neuf ans quand elle a commencé à travailler pour les Dissidentes. Elle n'était pas venue avec une idéologie — elle était venue avec un rapport de mission. Elle avait observé pendant deux mois comment les Capteurs impériaux opéraient dans le Sixième District, cartographié leurs routes, identifié leurs cycles, et proposé une mission de neutralisation.

Les Dissidentes avaient accepté parce que le travail de reconnaissance était professionnel. Elles l'avaient formée ensuite au reste.

La liste dont elle parle maintenant : des Capteurs actifs qui opèrent dans des quartiers où elle a identifié des Élus non enregistrés vulnérables. Elle met à jour cette liste chaque semaine. Quand une opportunité se présente, elle agit.`,
    },
    maintenant: {
      titre: 'Traqueuse',
      texte: `Yssara opère seule la plupart du temps. Les Dissidentes lui fournissent information et exfiltration ; elle fournit des résultats. Elle n'est pas connue dans les réseaux Dissidents comme quelqu'un à qui on parle — elle est connue comme quelqu'un qui règle des problèmes précis.

Elle connaît Thessandra (id:10), avec qui elle partage parfois des informations sur les zones de transit — Thessandra a besoin de savoir quels secteurs sont surveillés pour déplacer ses patients, Yssara a besoin de savoir quels secteurs ont des Élus non enregistrés récents pour anticiper les mouvements de Capteurs.

Ce matin, elle a reçu une information sur un Capteur qui opère dans le District Quatorze. Elle a trois jours.`,
    },
    objectif: {
      titre: 'La liste, réduite',
      texte: `Elle ne veut pas renverser l'Empire. Elle veut que les gens sur sa liste n'aient plus les moyens de chasser des Élus non enregistrés dans les quartiers de Khar-Vurn. Elle procède méthodiquement. La liste se réduit.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Assassin Dissident. Brûlée à 40% par la Rupture à 7 ans, soignée par Brasia sans le savoir. Traqueuse de Capteurs impériaux. Son Feu est d'une pureté et d'une intensité exceptionnelles — constante, permanente, indissociable d'elle-même.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'soignée_par_elle',
      depuis_ici: `Brasia l'a soignée à sept ans pendant la Rupture. Yssara ne s'en souvient pas directement — elle était sous traitement. Elle l'a appris plus tard par les archives d'un des postes de soin provisoires. Elle n'a jamais cherché à rencontrer Brasia pour ça. Ce n'est pas de l'indifférence — c'est qu'elle ne sait pas quoi faire de la gratitude envers quelqu'un qu'on ne se rappelle pas.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 10,
      nom: 'Thessandra',
      type: 'réseau_commun',
      depuis_ici: `Elles se voient deux ou trois fois par mois pour des transferts d'information. Yssara ne dit pas où elle va après ces rencontres. Thessandra ne demande pas. Leur accord fonctionne parce qu'elles ont des besoins complémentaires et un niveau de confiance opérationnelle qui n'exige pas de se connaître autrement.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'cible_potentielle',
      depuis_ici: `Elle sait que Cendrix est à Khar-Vurn. Elle sait ce qu'est une Capteur de ce niveau. Elle a observé ses patterns de déplacement depuis trois semaines. Elle n'a pas encore décidé si Cendrix entre dans sa liste — une Capteur de haut niveau en mission active est une décision qui exige une certitude qu'elle n'a pas encore.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Yssara ne combat pas. Elle termine. Quand elle entre dans une confrontation, c'est que la phase d'observation est terminée et qu'elle a choisi le moment et le terrain. Son Feu n'est pas spectaculaire — il est précis, rapide, définitif.`,
    sorts: [
      {
        nom: 'Braise Ciblée',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Yssara projette une braise concentrée sur une cible unique. Dégâts immédiats + brûlure persistante de 3 tours. Si la cible est déjà en état de brûlure, la braise déclenche une explosion thermique qui touche les cases adjacentes.`,
        description_lore: `Le Feu d'Yssara ne cherche pas à impressionner. Il cherche le point précis où la chaleur fait le plus de dégâts en le moins de temps. Elle a développé ça seule, en regardant comment la Rupture l'avait elle-même atteinte.`,
      },
      {
        nom: 'Signature Effacée',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Yssara supprime sa signature thermique pendant 2 tours — elle devient indétectable aux sorts de détection élémentaire et de vision thermique. Elle peut se déplacer librement. Tout sort utilisé pendant ce temps annule l'effet.`,
        description_lore: `Elle a appris à contrôler la chaleur permanente qu'elle dégage. Pas à l'éteindre — à la rendre identique à l'ambiance thermique alentour. Disparaître non pas en devenant froide, mais en devenant indiscernable du mur.`,
      },
      {
        nom: 'Traçage Thermique',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Yssara marque une cible avec sa signature thermique. Pendant 4 tours, elle voit la position de la cible à travers les obstacles et ses attaques contre elle ignorent 20% de la résistance thermique. La marque est invisible pour la cible.`,
        description_lore: `Deux mois d'observation des Capteurs impériaux lui ont appris quelque chose : chaque Élu a une signature thermique unique, comme une empreinte. Elle a développé la capacité de lire ces signatures et de les suivre.`,
      },
      {
        nom: 'Embrasement Final',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Yssara concentre toute sa chaleur interne en une frappe unique sur une cible à portée de 3 cases. Dégâts très élevés. Si la cible est sous 30% PV, les dégâts sont quadruplés. Temps de recharge : 5 tours.`,
        description_lore: `Elle l'a utilisé sept fois. Chaque fois, la cible était sur sa liste. Elle ne l'a jamais raté.`,
      },
      {
        nom: 'Feu Central',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura permanente. Yssara génère constamment de la chaleur — les ennemis adjacents subissent des dégâts thermiques mineurs par tour. Si un ennemi reste adjacent pendant 3 tours consécutifs, il devient vulnérable aux brûlures (+50% dégâts de feu reçus). Cette chaleur ne peut pas être supprimée ou réduite.`,
        description_lore: `Elle brûle légèrement, constamment, depuis l'âge de sept ans. Ce n'est pas quelque chose qu'elle contrôle — c'est quelque chose qu'elle est. Les médecins Dissidents qui l'ont examinée n'ont pas de terme pour ça. Elle en a un : elle est Feu, simplement.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Yssara',
      description: `Femme Pyrienne, 30 ans, petite mais présence immense. Peau rouge-brun avec brûlures visibles sur l'épaule droite, le bras droit et la nuque — zones cicatrisées roses-bordeaux brillantes. Yeux rouge profond qui fixent avec une immobilité particulière. Cheveux noirs en deux tresses serrées. Vêtements sombres sans insigne. Expression neutre, pas froide — simplement concentrée sur quelque chose que l'observateur ne voit pas. L'air autour d'elle légèrement distordu par la chaleur. Style concept art Riot Games, éclairage dramatique chaud, ombres nettes.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1200,

  lore_long: `LISTE
Un chapitre de la vie d'Yssara, Dissidente (Khar-Vurn)

—

I.

Elle attendit dans la vapeur du conduit d'évacuation depuis dix-neuf heures du soir.

Ce n'était pas inconfortable. Elle avait appris à attendre — un apprentissage qui ressemblait à une désactivation partielle du corps, où la chaleur et le temps cessaient d'être des problèmes et devenaient du bruit de fond. La vapeur du conduit masquait sa signature thermique dans les capteurs de distance standards. Elle savait cela depuis le premier mois où elle avait appris les procédures de surveillance des Capteurs.

L'homme qu'elle attendait s'appelait Fereth. Il était Capteur adjoint, spécialisé dans les signatures de jeunes Élus. Il opérait dans le District Quatorze depuis huit mois. Sa liste à lui comportait vingt-trois noms — des Élus non enregistrés repérés par les systèmes impériaux. Il en avait traité seize.

Traité. C'était le terme dans les rapports.

La liste d'Yssara était plus courte que celle de Fereth. Elle n'y mettait que des noms précis, avec des critères précis. Fereth y était depuis trois semaines.

—

II.

Elle avait sept ans quand la Rupture Thermique avait traversé le Quatrième District.

Elle ne pensait pas souvent à ça en ces termes — "la Rupture l'avait traversée". C'était pourtant précis. La surtension thermique avait traversé les murs du bâtiment de service où elle jouait et elle avait traversé son corps, quarante pour cent de la surface.

Ce qu'elle se rappelait : la chaleur différente. Pas la chaleur des forges qu'elle connaissait — une chaleur sans bord, sans direction, sans intention. Juste de la puissance libérée dans un espace trop petit pour la contenir.

Elle s'était réveillée dans un poste de soin provisoire. Quelqu'un avait soigné ses brûlures. Elle ne savait pas qui — elle avait eu accès aux archives du poste dix ans plus tard. Une praticienne nommée Brasia, présente dans le district pendant les huit jours d'urgence. Elle avait soigné dix-sept blessés graves dans ce poste. Yssara était le treizième.

Ce n'était pas une dette qu'Yssara portait. C'était une information qu'elle avait gardée parce que les informations utiles se gardaient.

—

III.

Fereth sortit du bâtiment de stockage à vingt-deux heures quarante.

Il était seul — ce n'était pas toujours le cas mais elle avait noté que ses déplacements nocturnes en civil étaient systématiquement solitaires. Il avait confiance dans l'anonymat des quartiers industriels. C'était une erreur de protocole qu'Yssara avait attendu trois semaines qu'il confirme.

Elle ne bougea pas pendant qu'il traversait la rue.

Elle avait choisi ce soir-là précisément : il rentrait d'une reconnaissance de terrain, il n'avait pas encore rédigé son rapport, aucune des informations qu'il portait n'était encore transmise à la structure de commandement. Ce qu'il avait dans sa tête et dans ses notes s'arrêtait là.

Il prit la rue perpendiculaire vers les transports de nuit.

Elle descendit du conduit.

—

IV.

Ce fut rapide.

Yssara n'aimait pas les confrontations longues — non par impatience, par économie. Chaque seconde supplémentaire est un risque supplémentaire. Son Feu est précis ou il ne sert à rien.

Après, elle resta immobile trente secondes pour vérifier que personne n'avait été témoin. Rien. Les quartiers industriels de nuit avaient cette qualité — ils étaient actifs mais bruyants, et le bruit masquait ce qu'on voulait ne pas voir.

Elle récupéra les notes de terrain de Fereth. Vingt-trois noms. Les seize qu'il avait "traités" ne pouvaient pas être non-traités. Les sept restants, elle les connaissait déjà — elle les avait identifiés elle-même dans le cadre de sa propre surveillance. Elle les transférerait à Thessandra demain matin pour les inclure dans les protocoles d'exfiltration.

Sa liste comportait maintenant un nom de moins.

—

V.

Elle rentra par les conduits souterrains — le même réseau que son père avait utilisé quand elle était enfant pour rentrer des forges. Elle l'avait réappris à dix-neuf ans, systématiquement, district par district.

Sa chaleur permanente réchauffait l'air immobile des tunnels. Elle l'avait toujours — depuis la Rupture, depuis ses sept ans, cette légère surchauffe interne qui ne s'éteignait jamais. Les médecins Dissidents qui l'avaient examinée l'avaient noté dans des termes qui signifiaient en substance qu'ils ne comprenaient pas ce que c'était.

Elle ne cherchait pas à comprendre non plus. C'était ce qu'elle était. Quelque chose de trop dense pour être contenu ordinairement — un Feu qui ne cherchait pas à brûler mais qui brûlait quand même parce que c'était sa nature.

La liste avait un nom de moins. Il en restait deux.

Elle avait le temps.`.trim(),
};

export default lore;
