/* Melissa Iori */
/* Harvest Source */

/* This is a single page app powered by React.js and Redux.js. */
/* The app's purpose is to provide an online marketplace for seeds and plants. */
/* I'm going to mess with React/Redux big time in this app. */
/* I'll try to comment on my findings as I go along here. */

/* The import statements bring in other modules stored in other locations. */
/* Without imports, all the dependency code would have to be stored in the same file. */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopBar from './components/TopBar.jsx';
import SideBar from './components/SideBar.jsx';
import MainView from './components/MainView.jsx';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

/* By convention, the App component is the root of my single page app. */
class App extends React.Component {
	render() {
		return(
			/* Lesson learned - adjacent jsx elements must be wrapped in an enclosing tag. */
			<div className="app">
				<TopBar />
				<SideBar />
				<MainView />
			</div>
		);
	}
}

/* ReactDOM.render is what actually brings the root React component into the DOM. */
ReactDOM.render(<App />,
  document.getElementById('root'));

// registerServiceWorker();