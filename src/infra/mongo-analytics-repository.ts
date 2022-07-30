import { Analytics, ErrorAnalytics } from '@/analytics'

export class MongoAnalyticsRepository implements Analytics, ErrorAnalytics {
  save(type: string, data: any): void {
    // O código vai aqui...
  }

  saveError(error: any): void {
    // O código vai aqui...
  }
}
