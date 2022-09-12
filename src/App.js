import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Totals from "./components/Totals";
import { useCartContext } from "./hooks/useCartContext";

function App() {
  const { isLoading } = useCartContext();

  return (
    <div className="bg-blue-200 h-screen w-screen">
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ItemContainer />
          <Totals />
        </>
      )}
    </div>
  );
}

export default App;
