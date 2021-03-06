import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

// Sign in with Google Popup
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    return user
  } catch (err: any) {
    alert(err.code)
  }
}

// Sign up!
export const signUp = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (err: any) {
    alert(err.code)
  }
}

// Sign in!
export const signIn = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (err: any) {
    alert(err.code)
  }
}

// Sign out!
export const logout = async () => {
  try {
    return await signOut(auth)
  } catch (err: any) {
    alert(err.code)
  }
}
