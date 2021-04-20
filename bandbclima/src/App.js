import "./components/assets/css/app.css"
import TopbarNav from "./components/TopbarNav"
import ProductsAmountCard from "./components/ProductsAmountCard"
import AmountInProductsCard from "./components/AmountInProductsCard"
import UsersAmountCard from "./components/UsersAmountCard"
import LastProduct from "./components/LastProduct"
import CategoriesBlock from "./components/CategoriesBlock"
import Table from "./components/Table"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="wrapper">
		
    	<div id="content-wrapper" className="d-flex flex-column">

		  <div id="content">

			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <TopbarNav />        
			</nav>
			
      <div class="container-fluid">

				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">B&B Clima App Dashboard</h1>
				</div>

				<div className="row">
          <ProductsAmountCard />
          <UsersAmountCard />
          <AmountInProductsCard />
				<div className="row">
          <LastProduct />
          <CategoriesBlock />          
          <Table />
				</div>
			</div>
			
			<footer className="sticky-footer bg-white">
        <Footer />
			</footer>
			
		</div>

	</div>
  </div>
  </div>
      </header>
  </div>
  );
}

export default App;
