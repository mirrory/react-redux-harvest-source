import React from 'react';

/* Defining a simple React component - in a function. */
/* Props are passed in like HTML attributes. */
/* This is a functional component. Because it's a function. */
function Heading(props){
  return <h1 className='main-heading'>Harvest Source</h1>;
}

class CartIcon extends React.Component {
	render() {
		return(
			<img src='' alt='the cart' />
		);
	}
}

class LoginPanel extends React.Component {
	render() {
		return(
			<div>Log In</div>
		);
	}
}

class UserPanel extends React.Component {
	render() {
		return(
			<div className='user-panel'>Hello, {this.props.name}!</div>
		);
	}
}

/* This is an ES6 class component */
export default class TopBar extends React.Component {
	render() {
		return(
			<div className='top-bar'>
				<Heading />
				<CartIcon />
				<UserPanel name='Guest' />
			</div>
		);
	}
}