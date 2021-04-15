import React from 'react';
import Categories from "./Categories";

function CategoriesBlock() {
  return (
	<div className="col-lg-6 mb-4">						
	    <div className="card shadow mb-4">
			<div className="card-header py-3">
				<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
			</div>
		<div className="card-body">
			<div className="row">
				<Categories />
			</div>
		</div>
		</div>
	</div>
    );
}

export default CategoriesBlock;