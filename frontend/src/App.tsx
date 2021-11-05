
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/Barchart";
import DonutChar from "components/DonutChar";
function App() {
  return (
      <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3 text-center">Dashboard de Vendas</h1>

          <div className="row py-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso</h5>
              <DonutChar />
            </div>
          </div>
          <div className="py-3">
            <h2 className="text-primary text-center">Todas Vendas</h2>
          </div>
          <DataTable />
      </div>
      <Footer />
      </>
  );
}

export default App;
