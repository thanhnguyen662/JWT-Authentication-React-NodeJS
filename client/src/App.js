import firebase from 'firebase/app';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { userInfo } from './features/Auth/loginSlice';
import Routers from './router';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      const unregisterAuthObserver = firebase
         .auth()
         .onAuthStateChanged(async (user) => {
            if (!user) {
               console.log('User is not logged in');
               return;
            }

            const action = userInfo({
               email: user.email,
               displayName: user.displayName,
               uid: user.uid,
               loginStatus: true,
            });
            dispatch(action);

            console.log('User is logged in: ', user);
            localStorage.setItem('providerData', true);
         });

      return () => unregisterAuthObserver();
   }, [dispatch]);

   return (
      <div className='App'>
         <Router>
            <Routers />
         </Router>
      </div>
   );
}

export default App;
