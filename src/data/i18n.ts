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
  note: {
    en: '↑ live phase-space of the standard map — the kind of dynamics I study',
    es: '↑ espacio de fases del mapa estándar, en vivo — el tipo de dinámica que estudio',
  },

  /* track record */
  tr_h2: { en: 'What have I been up to?', es: '¿Qué he estado haciendo?' },
  tr_lede: {
    en: "Short version: I like building things that can prove what they claim — systems that ship with their metrics attached. Lately that means legal AI in production, machine learning on sound and images, and a steady pull back toward the physics I came from. Here's the path so far.",
    es: 'La versión corta: me gusta construir cosas que pueden probar lo que afirman — sistemas que llegan con sus métricas incluidas. Últimamente eso significa IA legal en producción, machine learning sobre sonido e imágenes, y un tirón constante de vuelta a la física de la que vengo. Este es el camino hasta ahora.',
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
  ask: { en: '→ ask me about it', es: '→ pregúntame por esto' },
  explorer_hint: {
    en: 'browse with ↑ ↓ — the selected mock runs live',
    es: 'navega con ↑ ↓ — la maqueta seleccionada corre en vivo',
  },
  pg_g1: { en: 'software products', es: 'productos de software' },
  pg_g2: { en: 'machine learning', es: 'machine learning' },
  pg_g3: { en: 'science', es: 'ciencia' },
  pg_g4: { en: 'tools & infra', es: 'herramientas e infra' },
  pg_g5: { en: 'side quests & memes', es: 'side quests y memes' },

  ps_pin: { en: '● in production · private demo', es: '● en producción · demo privada' },
  pt_pin: { en: 'LEGAL AI · LOCAL-FIRST · RAG', es: 'IA LEGAL · LOCAL-FIRST · RAG' },
  pb_pin: {
    en: "Lawyers lose hours interrogating thousand-page scanned case files — and can't trust an answer they can't verify. pin ingests the file locally (<strong>OCR cascade → hybrid retrieval</strong>) and answers with a <strong>citation to the exact page</strong>, source image side by side. 30k+ pages ingested at ~10–100 pages/s locally, 98.5% recall@k50, ~2,000 automated tests, $0 operating cost.",
    es: 'Los abogados pierden horas interrogando expedientes escaneados de miles de páginas — y no pueden confiar en una respuesta que no pueden verificar. pin ingiere el expediente en local (<strong>cascada de OCR → búsqueda híbrida</strong>) y responde con una <strong>cita a la página exacta</strong>, con la imagen fuente al lado. 30k+ páginas a ~10–100 págs/s en local, 98,5% de recall@k50, ~2.000 tests, costo de operación $0.',
  },
  ps_talia: { en: '● hardware dev · fundraising', es: '● hardware · fundraising' },
  pt_talia: { en: 'IOT · ML · CONSERVATION', es: 'IOT · ML · CONSERVACIÓN' },
  pb_talia: {
    en: "Illegal logging is heard before it's seen. Solar edge sensors listen to the forest, a PyTorch classifier flags <strong>chainsaws in real time</strong>, the backend triangulates the source, and rangers get a map alert with <strong>audio evidence and GPS</strong> within minutes. Every confirmed alert fine-tunes the model.",
    es: 'La tala ilegal se escucha antes de verse. Sensores edge solares escuchan el bosque, un clasificador PyTorch detecta <strong>motosierras en tiempo real</strong>, el backend triangula el origen y los guardaparques reciben una alerta en mapa con <strong>evidencia de audio y GPS</strong> en minutos. Cada alerta confirmada afina el modelo.',
  },
  ps_vi2bo: { en: '● in production', es: '● en producción' },
  pt_vi2bo: { en: 'ML · VIDEO → LATEX PDF', es: 'ML · VIDEO → PDF LATEX' },
  pb_vi2bo: {
    en: "Hours of lectures and family recipes live trapped in video — useless for studying or printing. vi2bo runs a three-stage pipeline: <strong>transcription → structured Markdown → LaTeX</strong>, with every equation test-compiled before it's embedded. Feed it a class, get a study guide; feed it a recipe, get a cookbook page.",
    es: 'Horas de clases y recetas familiares viven atrapadas en video — inútiles para estudiar o imprimir. vi2bo corre un pipeline de tres etapas: <strong>transcripción → Markdown estructurado → LaTeX</strong>, con cada ecuación compilada de prueba antes de incrustarse. Dale una clase y sale una guía de estudio; dale una receta y sale una página de recetario.',
  },
  ps_road: { en: '● functional MVP', es: '● MVP funcional' },
  pt_road: { en: 'COMPUTER VISION · TRACKING', es: 'VISIÓN COMPUTACIONAL · TRACKING' },
  pb_road: {
    en: 'From raw highway footage to a mailed report: <strong>detection and tracking</strong> per vehicle, <strong>speed estimation</strong>, automatic flagging of violations, and an evidence report — frame-accurate captures, speed, timestamp — generated as PDF and sent to notify the infringing party.',
    es: 'Del video crudo de carretera a un reporte enviado: <strong>detección y tracking</strong> por vehículo, <strong>estimación de velocidad</strong>, marcado automático de infracciones y un reporte con evidencia — capturas al frame exacto, velocidad, timestamp — generado como PDF y enviado para notificar al infractor.',
  },
  ps_street: { en: '● functional MVP', es: '● MVP funcional' },
  pt_street: { en: 'ML · GEOSPATIAL', es: 'ML · GEOESPACIAL' },
  pb_street: {
    en: 'It really maps the streets: models fine-tuned on <strong>car-POV Mapillary imagery</strong> detect surface damage frame by frame and aggregate it city-wide — a ranked list of the <strong>worst streets</strong>, with analytics, photographic evidence and maintenance reports. Zero new hardware.',
    es: 'Mapea las calles de verdad: modelos afinados sobre <strong>imágenes POV de Mapillary</strong> detectan daño superficial cuadro a cuadro y lo agregan a escala de ciudad — un ranking de las <strong>peores calles</strong>, con analítica, evidencia fotográfica y reportes de mantención. Cero hardware nuevo.',
  },
  ps_pleamar: { en: '● in development', es: '● en desarrollo' },
  pt_pleamar: { en: 'ASTROPHYSICS · N-BODY', es: 'ASTROFÍSICA · N CUERPOS' },
  pb_pleamar: {
    en: '<strong>Gravitation, N objects, time</strong>: numerical experiments on the formation of galaxies and planetary systems — the thesis line reopened as software, built to be measured, visualized and questioned.',
    es: '<strong>Gravitación, N objetos, tiempo</strong>: experimentos numéricos sobre la formación de galaxias y sistemas planetarios — la línea de la tesis reabierta como software, construida para medirse, visualizarse y cuestionarse.',
  },
  ps_bio: { en: '● publication 2026', es: '● publicación 2026' },
  pt_bio: { en: 'BIOINFORMATICS · RESEARCH', es: 'BIOINFORMÁTICA · INVESTIGACIÓN' },
  pb_bio: {
    en: 'Bioinformatics for microbiology, in collaboration with the <strong>Microbiology Lab at Universidad de Chile</strong>: computational analysis supporting wet-lab research. <strong>Publication incoming 2026</strong> — Patricia Palma et al.',
    es: 'Bioinformática para microbiología, en colaboración con el <strong>Laboratorio de Microbiología de la Universidad de Chile</strong>: análisis computacional al servicio de la investigación de laboratorio. <strong>Publicación en camino 2026</strong> — Patricia Palma et al.',
  },
  ps_quel: { en: '● designed', es: '● diseñado' },
  pt_quel: { en: 'AGENT SAFETY · VOICE', es: 'SEGURIDAD DE AGENTES · VOZ' },
  pb_quel: {
    en: 'A sentinel for autonomous coding agents. When a headless agent hits a <strong>risky or irreversible fork</strong>, queltehue reaches its human over the cheapest channel that works — a log line, a Telegram card, or a <strong>natural phone call</strong> answered hands-free while driving. Free and self-hosted by default.',
    es: 'Un centinela para agentes de código autónomos. Cuando un agente headless llega a una <strong>bifurcación riesgosa o irreversible</strong>, queltehue alcanza a su humano por el canal más barato que funcione — una línea de log, una tarjeta de Telegram o una <strong>llamada natural</strong> contestada manos libres. Gratis y self-hosted por defecto.',
  },
  ps_qr: { en: '● mission accomplished', es: '● misión cumplida' },
  pt_qr: { en: 'ERROR CORRECTION · FORENSICS', es: 'CORRECCIÓN DE ERRORES · FORENSE' },
  pb_qr: {
    en: 'A damaged QR on a real ID card, brought back bit by bit: <strong>Reed-Solomon error correction</strong> applied by hand, every recovered byte <strong>cross-verified</strong> against a second decode path. Non-falsifiable data recovery as a weekend discipline.',
    es: 'Un QR dañado de una cédula real, recuperado bit a bit: <strong>corrección Reed-Solomon</strong> aplicada a mano, cada byte recuperado <strong>verificado</strong> contra una segunda ruta de decodificación. Recuperación de datos no falsificable como disciplina de fin de semana.',
  },
  ps_concon: { en: '● serious tooling', es: '● tooling serio' },
  pt_concon: { en: 'CODE QUALITY · MEASUREMENT', es: 'CALIDAD DE CÓDIGO · MEDICIÓN' },
  pb_concon: {
    en: "A <strong>rigorous code-quality analyzer</strong>: hundreds of measurements per run against industry-standard metrics — complexity, coverage, duplication, hygiene, docs. Its one hard rule: if a metric can't be computed honestly from the repo, it reports <strong>unknown</strong> — never a vibe.",
    es: 'Un <strong>analizador riguroso de calidad de código</strong>: cientos de mediciones por corrida contra métricas estándar de la industria — complejidad, cobertura, duplicación, higiene, docs. Su única regla dura: si una métrica no puede calcularse honestamente desde el repo, reporta <strong>desconocido</strong> — nunca una sensación.',
  },
  ps_boot: { en: '● internal tool', es: '● herramienta interna' },
  pt_boot: { en: 'AGENT INFRA · VERIFIED SETUP', es: 'INFRA DE AGENTES · SETUP VERIFICADO' },
  pb_boot: {
    en: '<strong>Bootstraps agentic work</strong>: it prepares everything an autonomous coding agent needs to start — environment, tooling, repo state — with <strong>byte-level verification</strong> of every artifact it lays down. The agent wakes up in exactly the workspace you intended, provably.',
    es: '<strong>Bootstrapea trabajo agéntico</strong>: prepara todo lo que un agente de código autónomo necesita para partir — ambiente, herramientas, estado del repo — con <strong>verificación a nivel de byte</strong> de cada artefacto que instala. El agente despierta exactamente en el workspace que querías, demostrablemente.',
  },
  ps_merge: { en: '● pure meme', es: '● meme puro' },
  pt_merge: { en: 'GIT · SOUNDBOARD', es: 'GIT · SOUNDBOARD' },
  pb_merge: {
    en: 'A meme with a build system: it <strong>screams "FAHH!"</strong> when a merge lands and cackles <strong>"jajajaja"</strong> when a PR gets closed. Sounds and triggers fully customizable — your repo events, your soundboard. Zero utility, maximum joy.',
    es: 'Un meme con build system: <strong>grita "FAHH!"</strong> cuando entra un merge y se ríe <strong>"jajajaja"</strong> cuando cierran un PR. Sonidos y triggers totalmente personalizables — tus eventos de repo, tu soundboard. Cero utilidad, máxima alegría.',
  },
  ps_palo: { en: '● building', es: '● en construcción' },
  pt_palo: { en: 'DEVTOOLS · LLM PIPELINE', es: 'DEVTOOLS · PIPELINE LLM' },
  pb_palo: {
    en: 'The little messenger pigeon: every Monday it audits my repositories, writes each a <strong>factual changelog</strong>, flags README drift, and synthesizes a cross-repo newsletter. <strong>Git is the only state</strong>, GitHub Actions the runtime — delivery belongs to its sister, <a href="#proj-queltehue">queltehue</a>.',
    es: 'La palomita mensajera: cada lunes audita mis repositorios, escribe a cada uno un <strong>changelog factual</strong>, marca drift en los README y sintetiza un newsletter cross-repo. <strong>Git es el único estado</strong>, GitHub Actions el runtime — la entrega es de su hermana, <a href="#proj-queltehue">queltehue</a>.',
  },
  ps_jos: { en: '● planning', es: '● en diseño' },
  pt_jos: { en: 'LIFE OS · TUI', es: 'SISTEMA DE VIDA · TUI' },
  pb_jos: {
    en: 'An operating system for a human life — not another task manager. It weighs energy, mood, health and neglected life areas, then surfaces the <strong>≤3 things that matter today</strong>, and why. A <strong>deterministic engine decides; AI only narrates</strong>. Health before output — never streaks, shame, or guilt.',
    es: 'Un sistema operativo para una vida humana — no otro gestor de tareas. Pondera energía, ánimo, salud y áreas descuidadas, y muestra las <strong>≤3 cosas que importan hoy</strong>, y por qué. Un <strong>motor determinista decide; la IA solo narra</strong>. Salud antes que output — nunca rachas, vergüenza ni culpa.',
  },
  ps_s67: { en: '● for the nephew', es: '● para el sobrino' },
  pt_s67: { en: 'ANTI-SOCIAL MEDIA · FULL APP', es: 'ANTI-RED SOCIAL · APP COMPLETA' },
  pb_s67: {
    en: 'A full social app — auth, synced video, messaging, games, feed, comments, likes, profiles — engineered to be <strong>anti</strong>-social: it only turns on during <strong>magical hours</strong> (times containing a 6 or a 7, in 67-time), and you can only peek at the feed after uploading your own 67. Built for my nephew; smuggles in a math lesson about time — and a little Pavlov. My (old ahh) friends still upload theirs.',
    es: 'Una app social completa — auth, video sincronizado, mensajería, juegos, feed, comentarios, likes, perfiles — diseñada para ser <strong>anti</strong>-social: solo se enciende en las <strong>horas mágicas</strong> (horas que contienen un 6 o un 7, en tiempo-67), y solo puedes espiar el feed si subes tu propio 67. Hecha para mi sobrino; esconde una lección de matemática sobre el tiempo — y un poco de Pavlov. Mis amigos (old ahh) todavía suben el suyo.',
  },

  /* three lenses */
  ln_label: { en: 'for context', es: 'para contexto' },
  ln_h2: { en: "Three habits I can't switch off.", es: 'Tres hábitos que no puedo apagar.' },
  l1_h: { en: 'Science', es: 'Ciencia' },
  l1_p: {
    en: "Astronomy taught me to distrust my own answers: measure first, quantify the uncertainty, let the data overrule me. It's why my systems ship with their metrics attached.",
    es: 'La astronomía me enseñó a desconfiar de mis propias respuestas: medir primero, cuantificar la incertidumbre y dejar que los datos me corrijan. Por eso mis sistemas llegan con sus métricas incluidas.',
  },
  l2_h: { en: 'Education', es: 'Educación' },
  l2_p: {
    en: "Teaching physics taught me that if I can't explain something simply, I don't understand it yet. That discipline carries into design docs, code review, and every conversation with a non-engineer.",
    es: 'Enseñar física me enseñó que si no puedo explicar algo con simpleza, todavía no lo entiendo. Esa disciplina se traslada a los design docs, al code review y a cada conversación con alguien no técnico.',
  },
  l3_h: { en: 'Engineering', es: 'Ingeniería' },
  l3_p: {
    en: 'Years across PHP, Python and TypeScript taught me that plain, well-tested code is what survives production. I write for the person who maintains it next — usually future me.',
    es: 'Años entre PHP, Python y TypeScript me enseñaron que el código simple y bien testeado es el que sobrevive a producción. Escribo para quien lo mantenga después — normalmente, mi yo futuro.',
  },

  /* AFK */
  life_label: { en: 'AFK', es: 'AFK' },
  life_p: {
    en: 'Family & friends first — happily engaged. Music, always. I make time for the outdoors; it keeps the heart happy and the head light. Also: plants, and eating well.',
    es: 'Familia y amigos primero — felizmente comprometido. Música, siempre. Me hago el tiempo para estar al aire libre; mantiene el corazón contento y la cabeza liviana. También: las plantas, y comer rico.',
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
