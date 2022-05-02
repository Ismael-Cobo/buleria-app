import { Provider } from 'react-redux'
import { NotificationProvider } from './components/notification/NotificationProvider'

import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const JournalApp = () => {
  return (
    <Provider store={store}>
      <NotificationProvider />
      <AppRouter />
    </Provider>
  )
}
