import { ErrorAnalytics } from '@/analytics'

export class SentryAdapter implements ErrorAnalytics {
  saveError(error: any): void {
    // O código vai aqui...
  }
}
