import en from './src/shared/messages/en.json'
import vi from './src/shared/messages/vi.json'

type Messages = typeof en & typeof vi

declare global {
  interface IntlMessages extends Messages {}
}
