import type { PersonnageLoreComplet } from '../../../lore-types';

const dravthyr: PersonnageLoreComplet = {
  id: 311,
  nom: 'Dravthyr',
  element: 'Sol',
  element2: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Petit et précis dans ses mouvements — l\'apothicaire qui travaille à des dosages où les erreurs ont des conséquences. Rien de superflu dans ses gestes.',
    peau: 'Gris-brun Chthonien avec des taches de décoloration aux mains — contact régulier avec des substances actives. Les taches ne sont pas dangereuses mais elles ne partent plus.',
    yeux: 'Brun-gris, habitués aux petits volumes et aux mesures précises. Il voit mieux les détails que les panoramas.',
    vetements: 'Tablier de travail sur une tenue neutre. Le tablier a des poches pour des petits contenants étiquetés — les composants de ses antidotes. Il ne change pas de tablier entre les clients.',
    signes_particuliers: 'Il ne dose jamais à l\'œil. Même pour des substances qu\'il connaît depuis 30 ans. Même pour des urgences. Une balance est toujours à portée.',
  },

  psychologie: {
    dominante: 'Production fiable d\'antidotes pour un environnement dont la toxicologie évolue. Les vapeurs fongiques de la Fosse ne sont pas stables. Ses antidotes doivent évoluer avec elles.',
    mecanisme_de_defense: 'La documentation des échecs. Chaque antidote qui n\'a pas fonctionné est noté avec la composition et les conditions. Il apprend des failures plutôt que de les oublier.',
    contradiction_interne: 'Ses antidotes sont efficaces parce qu\'il a des données sur les compositions fongiques actuelles. Ses données viennent en partie de Drevaya (39), qui les obtient de sources qu\'il ne questionne pas. Si la source change, ses formules peuvent ne plus correspondre.',
    rapport_aux_autres: 'Drevaya (39) lui apporte régulièrement des informations sur les compositions fongiques de zones spécifiques. Il ne sait pas comment elle les obtient. Drekkel (145) est son principal distributeur — il a une clientèle dans les zones de la Fosse que Dravthyr ne peut pas atteindre directement.',
    vision_du_monde: 'Les gens travaillent dans des zones qui les empoisonnent parce qu\'ils n\'ont pas le choix économique. Les antidotes qu\'il produit ne résolvent pas ce problème. Ils permettent aux gens de travailler un peu plus longtemps. C\'est ce qu\'il peut faire.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage de l\'apothicaire',
      contenu: 'Apprenti d\'un apothicaire souterrain à Ormn-Dur depuis l\'âge de 14 ans. L\'apothicaire spécialisé en toxicologie minière — les vapeurs de certaines zones de mine standard avaient des effets avant même la Fosse. À 22 ans, il avait repris la boutique à la retraite de son maître.',
    },
    arrivee: {
      titre: 'La Fosse comme nouveau terrain',
      contenu: 'Après l\'ouverture progressive de la Fosse Interdite à l\'exploitation, les vapeurs fongiques avaient créé une nouvelle catégorie de problèmes toxicologiques que ses antidotes standards ne couvraient pas. Il avait passé 2 ans à développer les premières formules. Les premières n\'avaient fonctionné que partiellement. Il avait documenté les échecs.',
    },
    premier_conflit: {
      titre: 'La rupture de composition',
      contenu: 'À 40 ans, une série d\'accidents dans une zone de la Fosse avait révélé que les antidotes qu\'il fournissait pour cette zone ne fonctionnaient plus. La composition fongique avait changé. Il avait reformulé en 3 semaines, avec des données d\'urgence fournies par Drevaya (39). La reformulation avait fonctionné. Il n\'avait pas encore demandé comment Drevaya avait eu les données en 3 jours.',
    },
    revelation: {
      titre: 'La dépendance aux données de Drevaya',
      contenu: 'En analysant ses formules sur 8 ans, il avait réalisé que ses reformulations réussies correspondaient toutes à des périodes où Drevaya lui avait fourni des données de composition spécifiques. Sans ces données, ses formules évoluaient plus lentement et avec plus d\'échecs intermédiaires. Il dépendait d\'une source qu\'il ne comprenait pas.',
    },
    etat_actuel: {
      titre: 'Les formules actuelles',
      contenu: 'Il maintient 12 formules d\'antidotes actives pour différentes zones et compositions. Drekkel (145) distribue dans les zones de la Fosse qu\'il ne couvre pas directement. Une formule est en cours de révision — Drevaya lui a signalé une modification de composition dans une zone spécifique il y a 2 semaines. Il attend les données précises avant de reformuler.',
    },
  },

  evenements_narratifs: [
    {
      id: 'dravthyr_formule_revision',
      titre: 'La formule en attente',
      description: 'Drevaya (39) l\'a alerté d\'une modification de composition dans une zone précise. Il attend les données précises avant de reformuler. Dans l\'intervalle, les travailleurs de cette zone utilisent l\'ancienne formule — partiellement efficace pour la nouvelle composition. Il n\'a pas encore décidé d\'alerter Drekkel (145) sur la fenêtre de protection réduite.',
      personnages_impliques: [39, 145],
      declencheur: 'Signalement d\'une modification de composition par Drevaya',
      consequence: 'Formule partiellement adaptée en usage pendant le délai de reformulation',
    },
    {
      id: 'dravthyr_dependance_source',
      titre: 'La question de Drevaya',
      description: 'Il n\'a pas encore posé à Drevaya (39) comment elle obtient des données de composition si rapidement. Il a peur que la réponse change quelque chose dans leur arrangement. Si sa source de données est vulnérable, ses formules le sont aussi. Il préfère pour l\'instant ne pas savoir ce qui pourrait mettre fin à ce qu\'il reçoit.',
      personnages_impliques: [39],
      declencheur: 'Dépendance identifiée sur une source dont la nature est inconnue',
      consequence: 'Fragilité de l\'ensemble des formules d\'antidotes si la source se tarit',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Infrastructure de survie pour les travailleurs de la Fosse. Ses antidotes permettent de travailler dans des zones qui tueraient sans. Sa dépendance à Drevaya est le point faible du système.',

  relations: [
    { id: 39, nom: 'Drevaya', type: 'allié', note: 'Source de données de composition fongique. Essentielle aux reformulations. Dravthyr n\'a pas posé la question de comment elle les obtient.' },
    { id: 145, nom: 'Drekkel', type: 'allié', note: 'Distributeur dans les zones de la Fosse non couvertes directement. Relais de terrain.' },
  ],

  combat: {
    sorts: [
      'Antidote en combat (Poison) — neutralisation d\'une toxine sur un allié — soin de résistance',
      'Sol protecteur (Sol) — formation d\'une barrière de terre absorbant les toxines ambiantes — protection de zone',
      'Extraction de poison (Poison) — isolation d\'une substance toxique dans un contenant — désarmement ou stockage',
    ],
  },

  image_prompts: [
    {
      id: 'dravthyr_dosage',
      description: 'Dravthyr dans sa boutique souterraine, en train de doser précisément un composant sur une balance miniature. Autour de lui, des rangées de petits contenants étiquetés. Un carnet ouvert sur la table montre des formules et des annotations. La boutique est petite mais méticuleusement organisée.',
      style: 'réaliste apothicaire souterrain, organisation précise, dosage en cours, ambiance de travail méticuleux',
    },
  ],

  lore_long: `Dravthyr fabrique des antidotes pour les vapeurs fongiques de la Fosse depuis 20 ans.

Ses formules évoluent avec les compositions fongiques. Drevaya (39) lui fournit des données de composition régulièrement — des données qui arrivent vite, sans explication sur leur source. Il n'a pas posé la question. Il préfère ne pas savoir ce qui pourrait mettre fin à ce qu'il reçoit.

Une formule est en cours de révision. Drevaya l'a alerté d'une modification. Il attend les données précises. Dans l'intervalle, les travailleurs utilisent une formule partiellement efficace.

Drekkel (145) distribue dans les zones qu'il ne couvre pas directement. Ensemble, ils couvrent la plupart des zones de la Fosse.

Une balance est toujours à portée. Même pour des urgences. Même pour des substances qu'il connaît depuis 30 ans.`,
};

export default dravthyr;
