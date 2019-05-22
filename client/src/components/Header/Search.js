/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { SearchSanpham } from '../../actions/search';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.search = this.search.bind(this);
	}

	search(event) {
		this.props.SearchSanpham(event.target.value);
	}

	render() {
		return (
			<div className="input-field" >
				{/* UI issue in chrome - need to fix */}
				<input
					placeholder="Search"
					id="search"
					type="search"
					onChange={this.search}
				/>
				
			</div>
		);
	}
}

const mapDispatchToProps = { SearchSanpham };
export default connect(
	null,
	mapDispatchToProps
)(SearchBar);
