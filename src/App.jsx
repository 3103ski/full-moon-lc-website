import './app.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import { Navbar } from './components';

// Pages
import { AnimatedRoutes } from './pages';

function App() {
	return (
		<div className='App' id='app'>
			<Router>
				<Navbar />
				<div id='view-container'>
					<AnimatedRoutes />
				</div>
			</Router>
		</div>
	);
}

export default App;
