import en from './messages/en.json';
import {PageData} from './src/i18n/type.ts'
type Messages = typeof en & { [key: string]: any } & {
  API:PageData
};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {
    
  }
}
