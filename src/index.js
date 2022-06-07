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

reportWebVitals();
