import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase';
// const firebaseConfig = {
// 	apiKey: 'AIzaSyBJjWPETurz47yap-YMj9-vSXyLHsKSKXI',
// 	authDomain: 'manga-live-6227a.firebaseapp.com',
// 	projectId: 'manga-live-6227a',
// 	storageBucket: 'manga-live-6227a.appspot.com',
// 	messagingSenderId: '676022570827',
// 	appId: '1:676022570827:web:68e7afd40db7d5041e22ce',
// 	measurementId: 'G-2JE9MV616G',
// };

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
