import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { setCurrentUser } from './store/features/auth/auth.slice'

import { auth } from './utils/firebase/userAuth'
import { selectUserInfo } from './store/features/auth/auth.selectors'

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'
import Header from './components/header/Header'
import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch, useAppSelector } from './store/hooks'

function App() {
  const userInfo = useAppSelector(selectUserInfo)
  // or useAppSelector(state => state.auth.userInfo)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      dispatch(setCurrentUser(user))
    })
  }, [dispatch])

  return (
    <>
      <Header userName={userInfo?.name} />
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
        {/** No match route approach */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
