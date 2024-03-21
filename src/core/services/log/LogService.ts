import * as Sentry from '@sentry/react';

export class LogService {
  public static setUser(user: Sentry.User) {
    Sentry.setUser(user);
  }

  public static logError(error: unknown) {
    Sentry.captureException(error);
  }

  public static logMessage(message: string) {
    Sentry.captureMessage(message);
  }

  public static addBreadcrumb(breadcrumb: Sentry.Breadcrumb) {
    Sentry.addBreadcrumb(breadcrumb);
  }
}
