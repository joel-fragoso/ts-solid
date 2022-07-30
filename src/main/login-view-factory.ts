import { ActionLog, ErrorLog, LogStrategy, ScreenLog } from '@/analytics'
import {
  ErrorAnalyticsComposite,
  FirebaseAdapter,
  LogglyAdapter,
  MongoAnalyticsRepository,
  SentryAdapter
} from '@/infra'
import { LoginView } from '@/presentation'

export const makeLoginView = (): LoginView => {
  const errorAnalyticsComposite = new ErrorAnalyticsComposite([
    new SentryAdapter(),
    new LogglyAdapter(),
    new MongoAnalyticsRepository()
  ])
  const firebaseAdapter = new FirebaseAdapter()
  const errorLog = new ErrorLog(errorAnalyticsComposite)
  const actionLog = new ActionLog(firebaseAdapter)
  const screenLog = new ScreenLog(firebaseAdapter)
  const logStrategy = new LogStrategy(errorLog, actionLog, screenLog)
  return new LoginView(logStrategy)
}
