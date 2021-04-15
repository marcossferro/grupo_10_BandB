import React from 'react';
import ProductDate from "./ProductDate"

function AmountCard() {
  return (
    <div className="card shadow mb-4">
    <div className="card-body">
        <div className="table-responsive">
        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Colors</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductDate />
                </tbody>
            </table>
        </div>
    </div>
</div>
  );
}

export default AmountCard;