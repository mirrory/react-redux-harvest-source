import React from 'react';

/* Front Page */
function DealPanel(props){
  return <div>Deals Today!</div>;
}

/* Search Results */
function ProductPreviewImage(props){
  return <img src='' alt='product preview' />;
}

function ProductPreviewDesc(props){
  return <div></div>;
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

class ProductPreview extends React.Component {
	render() {
		return(
			<div>
		    	<ProductPreviewImage />
		    	<ProductPreviewDesc />
		    	<hr />
	    	</div>
		);
	}
}

class ProductResultsList extends React.Component {
	render() {
		return(
			<div>
	    		<ProductPreview />
	    	</div>
		);
	}
}

/* Product Page */
function ProductTitle(props){
  return <div></div>;
}

function ProductDesc(props){
  return <div></div>;
}

// Can use food emojis as the pictures
function ProductImage(props){
  return <div></div>;
}

function BuyButton(props){
  return <div></div>;
}

function CartConfirm(props){
  return <div></div>;
}

class Product extends React.Component {
	render() {
		return(
			<div>
				<ProductTitle />
				<ProductDesc />
				<ProductImage />
				<BuyButton />	
			</div>
		);
	}
}

/* Cart */
class ProductCart extends React.Component {
	render() {
		return(
			<div>
				<ProductPreviewImage />
				<ProductPreviewDesc />	
			</div>
		);
	}
}

function SalesReceipt(props){
  return <div></div>;
}

function CheckoutButton(props){
  return <div></div>;
}

class ProductCartList extends React.Component {
	render() {
		return(
			<div>
				<ProductCart />	
				<SalesReceipt />
				<CheckoutButton />
			</div>
		);
	}
}

/* Payment Page */
function PlaceOrderButton(props){
  return <div></div>;
}

class PaymentForm extends React.Component {
	render() {
		return(
			<div>
				<input type='text'></input>	
				<PlaceOrderButton />
			</div>
		);
	}
}

/* Confirmation Page */
function ThankYouMessage(props){
  return <h1>Thank You For Ordering!</h1>;
}

function OrderStatusButton(props){
  return <button>Check Order Status</button>;
}

/* Order Page */
function CancelOrderButton(props){
  return <button>Cancel This Order</button>;
}

class ProductOrdered extends React.Component {
	render() {
		return(
			<div>
				<ProductPreviewImage />
				<ProductPreviewDesc />
			</div>
		);
	}
}

class ProductOrderList extends React.Component {
	render() {
		return(
			<div>
				<ProductOrdered />
				<CancelOrderButton />
			</div>
		);
	}
}

/* Order Cancelled Page */
function OrderCancelledMessage(props){
  return <h1>Order Cancelled</h1>;
}

/* User Profile Page */
function UserImage(props){
  return <img src='' alt='you' />;
}

function UserDetails(props){
  return <div></div>;
}

/* Main View */
export default class MainView extends React.Component {
	render() {
		return(
			<div className='main-view'>
				<DealPanel />
			</div>
		);
	}
}