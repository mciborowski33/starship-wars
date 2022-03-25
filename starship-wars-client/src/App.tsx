import React from 'react'
import {
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom';
import { GamePage, ListPage } from './pages';
import { PATHS } from './utils';
import './App.sass';

const App: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="appview">
			<div className="av-nav">
				<div className="av-title">
					Starships Wars
				</div>
				<div className="av-links">
					<div
						className="av-link"
						onClick={() => {
							navigate('/');
						}}
					>
						Game
					</div>
					<div
						className="av-link"
						onClick={() => {
							navigate('/list');
						}}
					>
						List
					</div>
				</div>
			</div>
			<div className="av-page">
				<Routes>
					<Route path={PATHS.GAME} element={<GamePage />} />
					<Route path={PATHS.LIST} element={<ListPage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
