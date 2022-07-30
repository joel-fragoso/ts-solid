import { ErrorAnalytics } from '@/analytics'

export class ErrorAnalyticsComposite implements ErrorAnalytics {
  constructor(private readonly errorAnalytics: ErrorAnalytics[]) {}

  saveError(error: any): void {
    this.errorAnalytics.forEach(errorLog => errorLog.saveError(error))
  }
}
