import * as Sentry from '@sentry/react';
import { envs } from '../../env';

Sentry.init({
  dsn: envs.SENTRY_DSN,
  integrations: [new Sentry.Replay()],
  tracesSampleRate: 0.2,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: envs.VITE_ENVIRONMENT,
});
