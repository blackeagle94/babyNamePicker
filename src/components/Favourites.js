import React from 'react';

function Favourites(props) {
	const pStyle = {
        fontSize: '14px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
        textAlign: 'center',
        float: 'right'
	};
	return (
		<div className="favs">
			<h4 className="favHead">
				Favourites:
			</h4> {' '}
            <p style={pStyle}>{props.fav.length > 0 ? '' : 'Click some names below to add your shortlist...'}</p>
			<div>
			{props.fav.map((item, index) => {
				return (
					<button onClick={() => {props.deleteAdded(index)}} id={item.id} className={item.sex === 'm' ? 'm' : 'f'} key={index}>
						{item.name}
					</button>
				);
			})}
			</div>
		</div>
	);
}
export default Favourites;
