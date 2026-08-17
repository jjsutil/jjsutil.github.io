export type Lang = 'en' | 'es';

/**
 * Every user-facing string, both languages. The page is rendered in English
 * at build time; the client script swaps innerHTML via [data-i18n] keys.
 */
export const T: Record<string, { en: string; es: string }> = {
  title: {
    en: 'Juan Sutil Palma — Software Engineer · Astrophysics · ML',
    es: 'Juan Sutil Palma — Ingeniero de Software · Astrofísica · ML',
  },
  h1: {
    en: 'I build scalable products with a scientific edge.',
    es: 'Construyo productos escalables con sello científico.',
  },
  sub: {
    en: 'Software Engineer trained in <strong>astronomy</strong> and <strong>physics education</strong>. I ship production software fast, and I think like a scientist while doing it.',
    es: 'Ingeniero de software formado en <strong>astronomía</strong> y <strong>pedagogía en física</strong>. Llevo software a producción rápido, y pienso como científico mientras lo hago.',
  },
  cta_book: { en: 'Book 30 min with me', es: 'Agenda 30 min conmigo' },

  /* track record */
  tr_h2: { en: 'What have I been up to?', es: '¿Qué he estado haciendo?' },
  tr_lede: {
    en: "Short version: I like building things that can prove what they claim — systems that ship with their metrics attached. Lately that means legal AI in production, machine learning on sound and images, and a steady pull back toward the physics I came from. Here's the path so far.",
    es: 'La versión corta: me gusta construir cosas que pueden probar lo que prometen — sistemas que llegan con sus métricas puestas. Hoy eso significa IA legal en producción, machine learning sobre sonido e imágenes, y la física tirando de vuelta, como siempre. Este es el camino hasta ahora.',
  },
  t0_p: {
    en: 'Legal document intelligence in production (private demo, real users): every answer a lawyer gets is cited to the exact page of the case file. Built the engine and the full app end to end.',
    es: 'Inteligencia documental legal en producción (demo privada, usuarios reales): cada respuesta que recibe un abogado viene citada a la página exacta del expediente. Construí el motor y la app completa de punta a punta.',
  },
  t1_p: {
    en: "LATAM's leading healthtech (Dentalink · Medilink · Gerty): 8,000+ clinics, 60,000+ health professionals, 20+ countries, ~42M appointments a year, a 200+ person team. I shipped across the payments portal (backend + frontend), the online-booking app, billing and messaging APIs, new features and redesigns, plus refactors and maintenance of the core SaaS — working through code review across large teams. Stack: PHP (CodeIgniter), React, SQL.",
    es: 'La healthtech líder de LATAM (Dentalink · Medilink · Gerty): 8.000+ clínicas, 60.000+ profesionales de la salud, 20+ países, ~42M de citas al año y un equipo de 200+ personas. Colaboré en el portal de pagos (backend + frontend), la app de agendamiento online, APIs de facturación y mensajería, features nuevas y rediseños, además de refactors y mantención del core del SaaS — con code review y colaboración entre equipos grandes. Stack: PHP (CodeIgniter), React, SQL.',
  },
  t2_p: {
    en: 'IoT + AI systems for real-time detection of illegal logging — edge audio intelligence, cloud analytics, and instant alerts for forest rangers.',
    es: 'Sistemas IoT + IA para detección en tiempo real de tala ilegal — inteligencia de audio en el borde, analítica en la nube y alertas instantáneas para guardabosques.',
  },
  t3_p: {
    en: 'Sole scientific advisor for "¡Manos al experimento!" — a 13-episode children\'s science series filmed in seven days. Designed and validated every experiment for safety, rigor, and fun.',
    es: 'Único asesor científico de "¡Manos al experimento!" — una serie infantil de ciencia de 13 episodios filmada en siete días. Diseñé y validé cada experimento por seguridad, rigor y diversión.',
  },
  t3_link: { en: 'watch the series →', es: 'ver la serie →' },
  t4_p: {
    en: 'Engineer #2 at a B2B SaaS for environmental-law compliance (Ley REP, Chile). Helped scale from 4 to 20+ enterprise clients, improved core workflows 60%+, and took automated test coverage from 0% to 67%+.',
    es: 'Ingeniero #2 en un SaaS B2B para cumplimiento de la Ley REP (Chile). Ayudé a escalar de 4 a 20+ clientes enterprise, mejoré 60%+ los flujos core y llevé la cobertura de tests automatizados de 0% a 67%+.',
  },
  t5_p: {
    en: 'Thesis on the gravitational dynamics of an exoplanetary system (planet formation). Radio-telescope calibration, interferometry, and HI 21cm spectroscopy at the UC teaching observatory.',
    es: 'Tesis en dinámica gravitacional de un sistema exoplanetario (formación planetaria). Calibración de radiotelescopios, interferometría y espectroscopía HI 21cm en el observatorio docente UC.',
  },

  /* projects */
  p_label: { en: 'projects', es: 'proyectos' },
  p_h2: { en: 'Private by default.', es: 'Privados por defecto.' },
  vault: {
    en: '<b>$ gh repo list --visibility private</b> → 15 projects, most behind private repos. Access on request: <a href="https://calendly.com/jjsutilp/meet-juan" target="_blank" rel="noopener">calendly</a> · <a href="mailto:juan@uc.cl">email</a>',
    es: '<b>$ gh repo list --visibility private</b> → 15 proyectos, la mayoría tras repos privados. Acceso a pedido: <a href="https://calendly.com/jjsutilp/meet-juan" target="_blank" rel="noopener">calendly</a> · <a href="mailto:juan@uc.cl">email</a>',
  },
  ask: { en: '→ let’s talk about this one', es: '→ conversemos de esto' },
  pg_g1: { en: 'software products', es: 'productos de software' },
  pg_g2: { en: 'machine learning', es: 'machine learning' },
  pg_g3: { en: 'science', es: 'ciencia' },
  pg_g4: { en: 'tools & infra', es: 'herramientas e infra' },
  pg_g5: { en: 'side quests & memes', es: 'side quests y memes' },

  ps_pin: { en: '● in production · private demo', es: '● en producción · demo privada' },
  pt_pin: { en: 'LEGAL AI · LOCAL-FIRST · RAG', es: 'IA LEGAL · LOCAL-FIRST · RAG' },
  ps_talia: { en: '● hardware dev · fundraising', es: '● hardware · fundraising' },
  pt_talia: { en: 'IOT · ML · CONSERVATION', es: 'IOT · ML · CONSERVACIÓN' },
  ps_vi2bo: { en: '● in production', es: '● en producción' },
  pt_vi2bo: { en: 'ML · VIDEO → LATEX PDF', es: 'ML · VIDEO → PDF LATEX' },
  ps_road: { en: '● functional MVP', es: '● MVP funcional' },
  pt_road: { en: 'COMPUTER VISION · TRACKING', es: 'VISIÓN COMPUTACIONAL · TRACKING' },
  ps_street: { en: '● functional MVP', es: '● MVP funcional' },
  pt_street: { en: 'ML · GEOSPATIAL', es: 'ML · GEOESPACIAL' },
  ps_pleamar: { en: '● in development', es: '● en desarrollo' },
  pt_pleamar: { en: 'ASTROPHYSICS · N-BODY', es: 'ASTROFÍSICA · N CUERPOS' },
  ps_bio: { en: '● publication 2026', es: '● publicación 2026' },
  pt_bio: { en: 'BIOINFORMATICS · RESEARCH', es: 'BIOINFORMÁTICA · INVESTIGACIÓN' },
  ps_quel: { en: '● designed', es: '● diseñado' },
  pt_quel: { en: 'AGENT SAFETY · VOICE', es: 'SEGURIDAD DE AGENTES · VOZ' },
  ps_qr: { en: '● mission accomplished', es: '● misión cumplida' },
  pt_qr: { en: 'ERROR CORRECTION · FORENSICS', es: 'CORRECCIÓN DE ERRORES · FORENSE' },
  ps_concon: { en: '● serious tooling', es: '● tooling serio' },
  pt_concon: { en: 'CODE QUALITY · MEASUREMENT', es: 'CALIDAD DE CÓDIGO · MEDICIÓN' },
  ps_boot: { en: '● internal tool', es: '● herramienta interna' },
  pt_boot: { en: 'AGENT INFRA · VERIFIED SETUP', es: 'INFRA DE AGENTES · SETUP VERIFICADO' },
  ps_merge: { en: '● pure meme', es: '● meme puro' },
  pt_merge: { en: 'GIT · SOUNDBOARD', es: 'GIT · SOUNDBOARD' },
  ps_palo: { en: '● building', es: '● en construcción' },
  pt_palo: { en: 'DEVTOOLS · LLM PIPELINE', es: 'DEVTOOLS · PIPELINE LLM' },
  ps_jos: { en: '● planning', es: '● en diseño' },
  pt_jos: { en: 'LIFE OS · TUI', es: 'SISTEMA DE VIDA · TUI' },
  ps_s67: { en: '● for the nephew', es: '● para el sobrino' },
  pt_s67: { en: 'ANTI-SOCIAL MEDIA · FULL APP', es: 'ANTI-RED SOCIAL · APP COMPLETA' },


  /* project copy: pp_* = the product and why · pe_* = the engineering decisions */
  pp_pin: {
    en: "Lawyers lose hours interrogating thousand-page scanned case files — and can't act on an answer they can't verify. pin reads the file and answers with a <strong>citation to the exact page</strong>, source image alongside.",
    es: 'Un abogado pierde horas interrogando expedientes escaneados de miles de páginas — y no puede actuar sobre una respuesta que no puede verificar. pin lee el expediente y responde con la <strong>cita a la página exacta</strong>, con la imagen original al lado.',
  },
  pe_pin: {
    en: 'Local-first by design: an OCR cascade feeds hybrid retrieval, nothing leaves the machine, and operating cost stays at $0. 30k+ pages ingested at ~10–100 pages/s, 98.5% recall@k50, ~2,000 automated tests.',
    es: 'Local-first por diseño: una cascada de OCR alimenta búsqueda híbrida, nada sale de la máquina y operar cuesta $0. Más de 30.000 páginas ingeridas a ~10–100 págs/s, 98,5% de recall@k50, ~2.000 tests automatizados.',
  },
  pp_talia: {
    en: "Illegal logging is heard before it's seen. talia puts solar-powered ears in the forest and turns a chainsaw into an alert a ranger receives <strong>within minutes</strong>, with audio evidence and GPS.",
    es: 'La tala ilegal se escucha antes de verse. talia pone oídos solares en el bosque y convierte una motosierra en una alerta que el guardaparques recibe <strong>en minutos</strong>, con evidencia de audio y GPS.',
  },
  pe_talia: {
    en: 'Edge-first: the PyTorch classifier runs on the sensor itself, LoRaWAN carries only events, and the backend triangulates the source. Every confirmed alert goes back into training.',
    es: 'Edge primero: el clasificador PyTorch corre en el propio sensor, LoRaWAN transporta solo eventos y el backend triangula el origen. Cada alerta confirmada vuelve al entrenamiento.',
  },
  pp_vi2bo: {
    en: 'Hours of lectures and family recipes live trapped in video, useless for studying or printing. vi2bo turns a video into a clean, <strong>typeset PDF</strong>.',
    es: 'Horas de clases y recetas familiares viven atrapadas en video, inútiles para estudiar o imprimir. vi2bo convierte un video en un <strong>PDF limpio y tipografiado</strong>.',
  },
  pe_vi2bo: {
    en: 'A three-stage pipeline — faster-whisper transcription, structured Markdown, LaTeX — with every equation test-compiled before embedding, and scene detection to keep the frames worth keeping.',
    es: 'Pipeline de tres etapas — transcripción con faster-whisper, Markdown estructurado, LaTeX — con cada ecuación compilada de prueba antes de incrustarse, y detección de escenas para rescatar los cuadros que valen.',
  },
  pp_road: {
    en: 'From raw highway footage to a mailed report: speed sentinel finds each vehicle, estimates its speed, and builds the <strong>evidence file</strong> for the violation.',
    es: 'Del video crudo de carretera a un informe enviado: speed sentinel encuentra cada vehículo, estima su velocidad y arma el <strong>expediente de la infracción</strong>.',
  },
  pe_road: {
    en: 'YOLO/Detectron2 detection with per-vehicle tracking; speed comes from calibrated frame geometry; the output is a frame-accurate PDF report, delivered by email.',
    es: 'Detección con YOLO/Detectron2 y tracking por vehículo; la velocidad sale de la geometría calibrada del cuadro; el resultado es un PDF con capturas al cuadro exacto, despachado por correo.',
  },
  pp_street: {
    en: 'No city has the full picture of its own pavement. street decay maps road damage city-wide with <strong>zero new hardware</strong>, ranking the worst streets with photographic evidence.',
    es: 'Ninguna ciudad tiene la foto completa de su propio pavimento. street decay mapea el daño vial a escala de ciudad <strong>sin hardware nuevo</strong>, y entrega el ranking de las peores calles con evidencia fotográfica.',
  },
  pe_street: {
    en: 'Models fine-tuned on car-POV Mapillary imagery score damage frame by frame; aggregation turns detections into an actionable list per street.',
    es: 'Modelos afinados sobre imágenes a nivel de calle de Mapillary puntúan el daño cuadro a cuadro; la agregación convierte detecciones en una lista accionable por calle.',
  },
  pp_pleamar: {
    en: 'The thesis line, reopened as software: how do galaxies and planetary systems form? pleamar runs numerical experiments on <strong>gravitation</strong> — N bodies, time, patience.',
    es: 'La línea de la tesis, reabierta como software: ¿cómo se forman las galaxias y los sistemas planetarios? pleamar corre experimentos numéricos de <strong>gravitación</strong> — N cuerpos, tiempo, paciencia.',
  },
  pe_pleamar: {
    en: 'Built on JAX for differentiable, GPU-ready N-body integration, equinox for structure, astropy for honest units. Made to be measured, visualized and questioned.',
    es: 'Construido sobre JAX para integración de N cuerpos diferenciable y lista para GPU, con equinox para la estructura y astropy para unidades honestas. Hecho para medirse, visualizarse y cuestionarse.',
  },
  pp_bio: {
    en: 'A wet lab generates more data than hands to analyze it. This collaboration with the <strong>Microbiology Lab at Universidad de Chile</strong> puts computational analysis at the service of the bench.',
    es: 'Un laboratorio genera más datos que manos para analizarlos. Esta colaboración con el <strong>Laboratorio de Microbiología de la Universidad de Chile</strong> pone el análisis computacional al servicio del mesón.',
  },
  pe_bio: {
    en: 'Reproducible pipelines over sequencing data. Publication incoming 2026 — Patricia Palma et al.',
    es: 'Pipelines reproducibles sobre datos de secuenciación. Publicación en camino para 2026 — Patricia Palma et al.',
  },
  pp_quel: {
    en: 'Autonomous coding agents hit forks a human should decide. queltehue is the sentinel that reaches you over the <strong>cheapest channel that works</strong>: a log line, a Telegram card, or a natural phone call answered hands-free.',
    es: 'Los agentes de código autónomos llegan a bifurcaciones que debe decidir un humano. queltehue es el centinela que te busca por el <strong>canal más barato que funcione</strong>: una línea de log, una tarjeta de Telegram o una llamada natural contestada manos libres.',
  },
  pe_quel: {
    en: 'FastAPI backend with SQLite state; channel escalation is configurable policy, not new code. Free and self-hosted by default.',
    es: 'Backend FastAPI con estado en SQLite; el escalamiento de canales es política configurable, no código nuevo. Gratis y self-hosted por defecto.',
  },
  pp_qr: {
    en: 'A damaged QR on a real ID card, brought back bit by bit. Data recovery that can <strong>prove itself</strong>.',
    es: 'El QR dañado de una cédula real, recuperado bit a bit. Recuperación de datos que puede <strong>probarse a sí misma</strong>.',
  },
  pe_qr: {
    en: 'Reed–Solomon error correction applied by hand, every recovered byte cross-verified against a second decode path — non-falsifiable by construction.',
    es: 'Corrección de errores Reed–Solomon aplicada a mano, con cada byte recuperado verificado contra una segunda ruta de decodificación — infalsificable por construcción.',
  },
  pp_concon: {
    en: 'Code quality is usually argued with adjectives. concon argues with <strong>measurements</strong>: hundreds per run, against industry-standard metrics.',
    es: 'La calidad de código suele discutirse con adjetivos. concon discute con <strong>mediciones</strong>: cientos por corrida, contra métricas estándar de la industria.',
  },
  pe_concon: {
    en: 'tree-sitter parsing across languages; complexity, coverage, duplication, hygiene, docs. Its one hard rule: a metric that cannot be computed honestly reports unknown — never a vibe.',
    es: 'Parsing con tree-sitter para varios lenguajes; complejidad, cobertura, duplicación, higiene, docs. Su única regla dura: la métrica que no puede calcularse honestamente reporta desconocido — nunca una sensación.',
  },
  pp_boot: {
    en: 'An autonomous agent is only as good as the workspace it wakes up in. bootflower prepares that workspace — <strong>and proves it</strong>.',
    es: 'Un agente autónomo vale lo que vale el workspace donde despierta. bootflower prepara ese workspace — <strong>y lo demuestra</strong>.',
  },
  pe_boot: {
    en: "Environment, tooling and repo state laid down with byte-level verification of every artifact. It's the same system that keeps this very site's workflow in sync.",
    es: 'Ambiente, herramientas y estado del repo instalados con verificación byte a byte de cada artefacto. Es el mismo sistema que mantiene sincronizado el workflow de este propio sitio.',
  },
  pp_merge: {
    en: 'A meme with a build system: it screams <strong>"FAHH!"</strong> when a merge lands and cackles when a PR gets closed. Zero utility, maximum joy.',
    es: 'Un meme con build system: grita <strong>"FAHH!"</strong> cuando entra un merge y se ríe cuando cierran un PR. Cero utilidad, máxima alegría.',
  },
  pe_merge: {
    en: 'Git hooks wired to a soundboard; sounds and triggers configurable per repo event.',
    es: 'Git hooks conectados a un soundboard; sonidos y gatillos configurables por evento del repo.',
  },
  pp_palo: {
    en: 'Repos drift and READMEs lie. Every Monday, palomita audits my repositories, writes each a <strong>factual changelog</strong>, and synthesizes a cross-repo newsletter.',
    es: 'Los repos derivan y los README mienten. Cada lunes, palomita audita mis repositorios, escribe a cada uno un <strong>changelog factual</strong> y sintetiza un newsletter que los cruza.',
  },
  pe_palo: {
    en: 'Git is the only state and GitHub Actions the only runtime — no database, no server. Delivery belongs to its sister, <a href="#proj-queltehue">queltehue</a>.',
    es: 'Git es el único estado y GitHub Actions el único runtime — sin base de datos ni servidor. La entrega corre por su hermana, <a href="#proj-queltehue">queltehue</a>.',
  },
  pp_jos: {
    en: 'An operating system for a human life — not another task manager. It surfaces the <strong>≤3 things that matter today</strong>, and why.',
    es: 'Un sistema operativo para una vida humana — no otro gestor de tareas. Muestra las <strong>≤3 cosas que importan hoy</strong>, y por qué.',
  },
  pe_jos: {
    en: 'It weighs energy, mood, health and neglected areas; a deterministic engine decides and AI only narrates. Health before output — never streaks, shame or guilt.',
    es: 'Pondera energía, ánimo, salud y áreas descuidadas; un motor determinista decide y la IA solo narra. Salud antes que productividad — nunca rachas, vergüenza ni culpa.',
  },
  pp_s67: {
    en: 'A full social app engineered to be <strong>anti</strong>-social: it only turns on during magic hours — times containing a 6 or a 7 — and you only see the feed after posting your own 67. Built for my nephew; my friends still upload theirs.',
    es: 'Una app social completa diseñada para ser <strong>anti</strong>-social: solo se enciende en las horas mágicas — horas con un 6 o un 7 — y solo ves el feed si subiste tu propio 67. Hecha para mi sobrino; mis amigos todavía suben el suyo.',
  },
  pe_s67: {
    en: 'Auth, synced video, messaging, feed, likes, profiles; the time gate smuggles in a math lesson about reading the clock — and a little Pavlov.',
    es: 'Auth, video sincronizado, mensajería, feed, likes y perfiles; el candado horario esconde una lección de matemática sobre leer la hora — y un poco de Pavlov.',
  },

  /* three lenses */
  ln_label: { en: 'for context', es: 'para contexto' },
  ln_h2: { en: "Three habits I can't switch off.", es: 'Tres deformaciones profesionales.' },
  l1_h: { en: 'Science', es: 'Ciencia' },
  l1_p: {
    en: "Astronomy taught me to distrust my own answers: measure first, quantify the uncertainty, let the data overrule me. It's why my systems ship with their metrics attached.",
    es: 'La astronomía me enseñó a desconfiar de mis propias respuestas: primero medir, después cuantificar la incertidumbre, y al final dejar que los datos manden. Por eso mis sistemas llegan con sus métricas puestas.',
  },
  l2_h: { en: 'Education', es: 'Educación' },
  l2_p: {
    en: "Teaching physics taught me that if I can't explain something simply, I don't understand it yet. That discipline carries into design docs, code review, and every conversation with a non-engineer.",
    es: 'Enseñar física me dejó una regla: lo que no puedo explicar simple, todavía no lo entiendo. Esa regla me acompaña en los design docs, en el code review y en cada conversación con alguien que no programa.',
  },
  l3_h: { en: 'Engineering', es: 'Ingeniería' },
  l3_p: {
    en: 'Years across PHP, Python and TypeScript taught me that plain, well-tested code is what survives production. I write for the person who maintains it next — usually future me.',
    es: 'Años entre PHP, Python y TypeScript me convencieron de que a producción sobrevive el código simple y bien probado. Escribo para quien lo mantenga después — casi siempre, yo mismo en seis meses.',
  },

  /* AFK */
  life_label: { en: 'AFK', es: 'AFK' },
  life_p: {
    en: 'Family & friends first — happily engaged. Music, always. I make time for the outdoors; it keeps the heart happy and the head light. Also: plants, and eating well.',
    es: 'Familia y amigos primero — felizmente comprometido. Música, siempre. Aire libre seguido, que mantiene el corazón contento y la cabeza liviana. Y las plantas, y comer rico.',
  },

  /* contact / footer */
  c_label: { en: 'contact', es: 'contacto' },
  c_h2: { en: "Let's talk about your project.", es: 'Hablemos de tu proyecto.' },
  c_btn: { en: 'Schedule a call', es: 'Agendar una llamada' },
  loc_label: { en: 'location', es: 'ubicación' },
  blog_label: { en: 'blog', es: 'blog' },
  fin: {
    en: 'uptime since 1997-06-23 · hero: Chirikov standard map, K = 0.97 · astro, no UI framework · <a href="https://github.com/jjsutil/jjsutil.github.io" target="_blank" rel="noopener">source</a> · updated aug 2026',
    es: 'uptime desde 1997-06-23 · hero: mapa estándar de Chirikov, K = 0.97 · astro, sin frameworks de UI · <a href="https://github.com/jjsutil/jjsutil.github.io" target="_blank" rel="noopener">código</a> · actualizado ago 2026',
  },

  /* blog */
  blog_h2: { en: 'Field notes.', es: 'Notas de campo.' },
  blog_lede: {
    en: 'Occasional writing on building software with a scientific edge: systems that prove what they claim, machine learning in the real world, and the physics that keeps pulling me back.',
    es: 'Escritura ocasional sobre construir software con sello científico: sistemas que prueban lo que afirman, machine learning en el mundo real, y la física que me sigue tirando de vuelta.',
  },
  blog_empty: {
    en: '<b>$ ls ~/blog</b> → empty, for now. The first note is being written — meanwhile, the projects below the fold of the <a href="/">landing</a> tell the story.',
    es: '<b>$ ls ~/blog</b> → vacío, por ahora. La primera nota se está escribiendo — mientras tanto, los proyectos de la <a href="/">landing</a> cuentan la historia.',
  },
  blog_back: { en: '← back to the landing', es: '← volver a la landing' },
};

export const t = (key: string, lang: Lang = 'en'): string => {
  const entry = T[key];
  if (!entry) throw new Error(`missing i18n key: ${key}`);
  return entry[lang];
};
