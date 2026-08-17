export interface Project {
  /** stable id: element ids, deep links (#proj-<id>), mock component key */
  id: string;
  name: string;
  /** i18n key suffix: ps_<k> status, pt_<k> tag, pp_<k> product, pe_<k> engineering */
  k: string;
  state: 'done' | 'build' | 'plan';
  stack: string;
}

export interface ProjectGroup {
  /** i18n key for the group label */
  key: string;
  projects: Project[];
}

export const GROUPS: ProjectGroup[] = [
  {
    key: 'pg_g1',
    projects: [
      { id: 'pin', name: 'pin', k: 'pin', state: 'done', stack: 'python · fastapi · react · faiss · sqlite fts5 · paddleocr / qwen-vl' },
      { id: 'talia', name: 'talia', k: 'talia', state: 'build', stack: 'esp32 · lorawan · pytorch · fastapi · react' },
      { id: 'vi2bo', name: 'vi2bo', k: 'vi2bo', state: 'done', stack: 'python · faster-whisper · scenedetect · latex' },
    ],
  },
  {
    key: 'pg_g2',
    projects: [
      { id: 'speed', name: 'speed sentinel', k: 'road', state: 'build', stack: 'yolo · detectron2 · opencv · python' },
      { id: 'street', name: 'street decay', k: 'street', state: 'build', stack: 'pytorch fine-tuning · mapillary api · python' },
    ],
  },
  {
    key: 'pg_g3',
    projects: [
      { id: 'pleamar', name: 'pleamar', k: 'pleamar', state: 'build', stack: 'python · jax · equinox · astropy' },
      { id: 'bioinfo', name: 'bioinfo × UChile', k: 'bio', state: 'build', stack: 'python · bioinformatics pipelines' },
    ],
  },
  {
    key: 'pg_g4',
    projects: [
      { id: 'queltehue', name: 'queltehue', k: 'quel', state: 'plan', stack: 'python · fastapi · sqlite · telegram · voice' },
      { id: 'qr', name: 'QR-recover', k: 'qr', state: 'done', stack: 'python · reed–solomon' },
      { id: 'concon', name: 'concon', k: 'concon', state: 'build', stack: 'python · tree-sitter · static analysis' },
      { id: 'bootflower', name: 'bootflower', k: 'boot', state: 'build', stack: 'python · agents · byte-verified bootstrap' },
    ],
  },
  {
    key: 'pg_g5',
    projects: [
      { id: 'onthemerge', name: 'onthemerge', k: 'merge', state: 'plan', stack: 'git hooks · audio' },
      { id: 'palomita', name: 'palomita', k: 'palo', state: 'build', stack: 'github actions · llm pipeline · git-as-state' },
      { id: 'juanos', name: 'juanOS', k: 'jos', state: 'plan', stack: 'deterministic engine · tui' },
      { id: 's67', name: '67', k: 's67', state: 'build', stack: 'auth · realtime sync · video · feed' },
    ],
  },
];
