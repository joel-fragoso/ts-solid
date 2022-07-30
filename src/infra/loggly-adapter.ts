import { ErrorAnalytics } from '@/analytics'

export class LogglyAdapter implements ErrorAnalytics {
  saveError(error: any): void {
    // O código vai aqui...
  }
}
