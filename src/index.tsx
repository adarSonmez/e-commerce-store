import React from 'react'
import { createRoot } from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

// The order of importing firebase modules is important
import './utils/firebase/config'
import './utils/firebase/controller'
import './utils/firebase/userAuth'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react'

import './index.sass'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/config'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

serviceWorkerRegistration.register()
reportWebVitals()
