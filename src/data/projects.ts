export interface Project {
  /** stable id: element ids, deep links (#proj-<id>), mock component key */
  id: string;
  name: string;
  /** i18n key suffix: ps_<k> status, pt_<k> tag, pb_<k> body */
  k: string;
  lock: boolean;
  state: 'done' | 'build' | 'plan';
  stack: string;
  mailSubject: string;
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
      { id: 'pin', name: 'pin', k: 'pin', lock: false, state: 'done', stack: 'python · fastapi · react · faiss · sqlite fts5 · paddleocr / qwen-vl', mailSubject: 'Walk me through pin' },
      { id: 'talia', name: 'talia', k: 'talia', lock: true, state: 'build', stack: 'esp32 · lorawan · pytorch · fastapi · react', mailSubject: 'Walk me through talia' },
      { id: 'vi2bo', name: 'vi2bo', k: 'vi2bo', lock: true, state: 'done', stack: 'python · asr · markdown · latex', mailSubject: 'Walk me through vi2bo' },
    ],
  },
  {
    key: 'pg_g2',
    projects: [
      { id: 'speed', name: 'speed sentinel', k: 'road', lock: true, state: 'build', stack: 'yolo · detectron2 · opencv · python', mailSubject: 'Walk me through speed sentinel' },
      { id: 'street', name: 'street decay', k: 'street', lock: true, state: 'build', stack: 'pytorch fine-tuning · mapillary api · python', mailSubject: 'Walk me through street decay' },
    ],
  },
  {
    key: 'pg_g3',
    projects: [
      { id: 'pleamar', name: 'pleamar', k: 'pleamar', lock: true, state: 'build', stack: 'python · numpy · n-body simulation', mailSubject: 'Walk me through pleamar' },
      { id: 'bioinfo', name: 'bioinfo × UChile', k: 'bio', lock: true, state: 'build', stack: 'python · bioinformatics pipelines', mailSubject: 'Walk me through the bioinformatics collab' },
    ],
  },
  {
    key: 'pg_g4',
    projects: [
      { id: 'queltehue', name: 'queltehue', k: 'quel', lock: true, state: 'plan', stack: 'python · telegram · voice calls', mailSubject: 'Walk me through queltehue' },
      { id: 'qr', name: 'QR-recover', k: 'qr', lock: true, state: 'done', stack: 'python · reed–solomon', mailSubject: 'Walk me through QR-recover' },
      { id: 'concon', name: 'concon', k: 'concon', lock: true, state: 'build', stack: 'python · static analysis · industry-standard metrics', mailSubject: 'Walk me through concon' },
      { id: 'bootflower', name: 'bootflower', k: 'boot', lock: true, state: 'build', stack: 'python · agents · byte-verified bootstrap', mailSubject: 'Walk me through bootflower' },
    ],
  },
  {
    key: 'pg_g5',
    projects: [
      { id: 'onthemerge', name: 'onthemerge', k: 'merge', lock: true, state: 'plan', stack: 'git hooks · audio', mailSubject: 'Walk me through onthemerge' },
      { id: 'palomita', name: 'palomita', k: 'palo', lock: true, state: 'build', stack: 'github actions · llm pipeline · git-as-state', mailSubject: 'Walk me through palomita' },
      { id: 'juanos', name: 'juanOS', k: 'jos', lock: true, state: 'plan', stack: 'deterministic engine · tui', mailSubject: 'Walk me through juanOS' },
      { id: 's67', name: '67', k: 's67', lock: true, state: 'build', stack: 'auth · realtime sync · video · feed', mailSubject: 'Walk me through 67' },
    ],
  },
];
