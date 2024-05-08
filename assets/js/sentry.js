import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://3e97b04bad500a426d9040d5b6d32dfb@o182377.ingest.us.sentry.io/4507219886538752",

  environment: process.env.NODE_ENV,

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  //release: "my-project-name@2.3.12",
  //integrations: [
  //  Sentry.browserTracingIntegration(),
  //  Sentry.replayIntegration(),
  //],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  //tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  //tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  //replaysSessionSampleRate: 0.1,
  //replaysOnErrorSampleRate: 1.0,
});