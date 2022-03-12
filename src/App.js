import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Action } from './redux/user/user.reducer';

function App() {
  const dispatch = useDispatch();
  const authStateListener = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            Action.Creators.getCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(Action.Creators.getCurrentUser(userAuth));
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
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
