import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

const isLocal = false;

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({
        dsn: "https://66123c8499a34d74857d2cba871b3609@o492161.ingest.sentry.io/5558914",
        autoSessionTracking: true,
        integrations: [
            new Integrations.BrowserTracing(),
        ],

        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0,
    });
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);

    alert(message);
}