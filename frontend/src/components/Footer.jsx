import React from 'react'

function Footer() {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column1 */}
					<div className="col">
						<h4>GYMOTIVE INC</h4>
						<h3>WE’RE WORKING HARD. DAY AFTER DAY.</h3>
					</div>
					{/* Column2 */}
					<div className="col">
						<h4>About</h4>
						<ul className="list-unstyled">
							<li>about 1</li>
							<li>about 2</li>
							<li>about 3</li>
						</ul>
					</div>
					{/* Column3 */}
					<div className="col">
						<h4>col</h4>
						<ul className="list-unstyled">
							<li>col 1</li>
							<li>col 2</li>
							<li>col 3</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row">

					&copy;{new Date().getFullYear()} gymotive | All rights reserved |
					Terms Of Service | Privacy

				</div>
			</div>
		</div>
	)
}

export default Footer