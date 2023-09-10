import * as Sentry from '@sentry/react';

export class LogService {
  public static setUser(user: Sentry.User) {
    Sentry.setUser(user);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static logError(error: any) {
    Sentry.captureException(error);
  }

  public static logMessage(message: string) {
    Sentry.captureMessage(message);
  }

  public static addBreadcrumb(breadcrumb: Sentry.Breadcrumb) {
    Sentry.addBreadcrumb(breadcrumb);
  }
}
