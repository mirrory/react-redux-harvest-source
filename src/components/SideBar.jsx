import React from 'react';

function SearchBar(props){
  return <input type='search'></input>;
}

class NavList extends React.Component {
	render() {
		return(
			<div>
				<button>Shop Flower Seeds</button>
				<br />
				<button>Shop Fruit Seeds</button>
				<br />
				<button>Shop Vegetable Seeds</button>
			</div>
		);
	}
}

export default class SideBar extends React.Component {
	render() {
		return(
			<div className='side-bar'>
				<SearchBar />
				<NavList />
			</div>
		);
	}
}