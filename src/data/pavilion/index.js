// Every Project Pavilion map, keyed by the event's slug: the JSON file name
// and the value of <PavilionMap event="..." />. Add one line per new event.
// <PavilionMap /> with no event shows the event with the latest last day.
// See src/components/PavilionMap/README.md.
import kubeconNa2026 from './kubecon-na-2026.json';

export const EVENTS = {
  'kubecon-na-2026': kubeconNa2026,
};
