import { Log } from '@/presentation'

export class LoginView {
  constructor(private readonly log: Log) {}

  render() {
    this.log.event('screen', { name: 'Login' })
  }
}
