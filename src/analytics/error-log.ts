import { ErrorAnalytics } from '@/analytics'
import { Log } from '@/presentation'

export class ErrorLog implements Log {
  constructor(private readonly errorAnalytics: ErrorAnalytics) {}

  event(type: Log.Type, data: Log.Data): void {
    this.errorAnalytics.saveError(data.error)
  }
}
