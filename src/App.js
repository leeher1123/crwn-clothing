import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const authStateListener = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  };
  useEffect(() => {
    authStateListener();
    return () => {
      authStateListener();
    };
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
