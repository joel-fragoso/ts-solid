import { Analytics } from '@/analytics'
import { Log } from '@/presentation'

export class ScreenLog implements Log {
  constructor(private readonly analytics: Analytics) {}

  event(type: Log.Type, data: Log.Data): void {
    this.analytics.save(type, data.name)
  }
}
