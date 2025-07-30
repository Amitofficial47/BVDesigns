
import {genkit} from 'genkit';

export const ai = genkit({
  plugins: [],
  logSinks: ['file'],
  enableTracingAndMetrics: true,
});
