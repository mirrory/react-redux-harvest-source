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
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

/* Defining a simple React component - in a function. */
/* Props are passed in like HTML attributes. */
/* This is a functional component. Because it's a function. */
function Heading(props){
  return <h1>Harvest Source</h1>;
}

class CartIcon extends React.Component {
	render() {
		return(
			<img src='' />
		);
	}
}

class UserPanel extends React.Component {
	render() {
		return(
			<div>Hello, {this.props.name}!</div>
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

function SearchBar(props){
  return <input type='search'></input>;
}

class NavList extends React.Component {
	render() {
		return(
			<button>Shop Flower Seeds</button>
		);
	}
}

function DealPanel(props){
  return <div>Deals Today!</div>;
}

class FilterChoice extends React.Component {
	render() {
		return(
			<div>Add New Filter</div>
		);
	}
}

class SortChoice extends React.Component {
	render() {
		return(
			<div>Sort By</div>
		);
	}
}

class ProductResultsList extends React.Component {
	render() {
		return(
	    	<div></div>
		);
	}
}

class Product extends React.Component {
	render() {
		return(
			<div></div>
		);
	}
}

class ProductCartList extends React.Component {
	render() {
		return(
			<div></div>
		);
	}
}

class PaymentForm extends React.Component {
	render() {
		return(
			<div></div>
		);
	}
}

class ProductOrderList extends React.Component {
	render() {
		return(
			<div></div>
		);
	}
}

function ThankYouMessage(props){
  return <h1>Thank You For Ordering!</h1>;
}

function OrderCancelledMessage(props){
  return <h1>Order Cancelled</h1>;
}

function UserImage(props){
  return <img src='' />;
}

function UserDetails(props){
  return <div></div>;
}

/* This is an ES6 class component */
class TopBar extends React.Component {
	render() {
		return(
			<div className='top-bar'>
				<Heading />
				<CartIcon />
				<UserPanel name='Kara' />
			</div>
		);
	}
}

class SideBar extends React.Component {
	render() {
		return(
			<div className='side-bar'>
				<SearchBar />
				<NavList />
			</div>
		);
	}
}

class MainView extends React.Component {
	render() {
		return(
			<div className='main-view'>
				<DealPanel />
			</div>
		);
	}
}

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

// Component design:
// App
	// TopBar
		// Heading
		// Cart
		// UserPanel
			// LogInPanel
	// SideBar
		// SearchBar
		// NavList
	// MainView
		// DealPanel
		// FilterChoice
		// SortChoice
		// ProductResultsList
			// ProductPreview
				// ProductPreviewImage
				// ProductPreviewDesc
		// Product
			// ProductTitle
			// ProductDesc
			// ProductImage
			// BuyButton
			// CartConfirm
		// ProductCartList
			// ProductCart
				// ProductPreviewImage
				// ProductPreviewDesc
			// SalesReceipt
			// CheckoutButton
		// PaymentForm
			// PlaceOrderButton
		// ThankYouMessage
			// OrderStatusButton
		// ProductOrderList
			// ProductOrdered
				// ProductPreviewImage
				// ProductPreviewDesc
			// CancelOrderButton
		// OrderCancelledMessage
		// UserImage
		// UserDetails




/* ReactDOM.render is what actually brings the root React component into the DOM. */
ReactDOM.render(<App />,
  document.getElementById('root'));

// registerServiceWorker();