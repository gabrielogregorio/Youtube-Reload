import * as Sentry from '@sentry/react';

export class LogService {
  public static setUser(user: Sentry.User): void {
    Sentry.setUser(user);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static logError(error: any): void {
    Sentry.captureException(error);
  }

  public static logMessage(message: string): void {
    Sentry.captureMessage(message);
  }

  public static addBreadcrumb(breadcrumb: Sentry.Breadcrumb): void {
    Sentry.addBreadcrumb(breadcrumb);
  }
}
