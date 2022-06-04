// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Core Components
import App from './App';
import reportWebVitals from './reportWebVitals';

// Global Styling
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
