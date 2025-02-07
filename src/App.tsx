import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { setCurrentUser } from './store/features/auth/auth.slice'
import { Online, Offline } from 'react-detect-offline'

import { auth } from './utils/firebase/userAuth'
import { selectUserInfo } from './store/features/auth/auth.selectors'

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'
import Header from './components/header/Header'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useAppDispatch, useAppSelector } from './store/hooks'
import OfflinePage from './pages/offline-page/OfflinePage'

function App() {
  const userInfo = useAppSelector(selectUserInfo)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      dispatch(setCurrentUser(user))
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <>
      <Online>
        <Header userName={userInfo?.name} />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route
              path="/checkout"
              element={
                userInfo.id ? <CheckoutPage /> : <Navigate replace to="/signup" />
              }
            />
            <Route
              path="/signin"
              element={userInfo.id ? <Navigate replace to="/" /> : <SignIn />}
            />
            <Route
              path="/signup"
              element={userInfo.id ? <Navigate replace to="/" /> : <SignUp />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  )
}

export default App
