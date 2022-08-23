import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<SignIn />} />
				<Route exact path="/dashboard/" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
