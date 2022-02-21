import Container from "../components/Container";
import Banner from "../components/Banner";

import AddCostModal from "../modals/AddCostModal";
import { costsActions } from "../store/costs-slice";

import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function Home1() {
  const filteredCosts = useSelector((state) => state.costs.filteredCosts);
  const isModalOpen = useSelector((state) => state.showForm.isOpen);
  const costs = useSelector((state) => state.costs.costs);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const removeCost = (id) => {
    dispatch(costsActions.remove(id));
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const costs = filteredCosts.map((c) => Number(c.cost));
    if (costs.length > 0) {
      const sum = costs.reduce((a, b) => a + b);
      setTotal(sum);
    }
  }, [filteredCosts]);

  // useEffect(()=>{
  //   fetch('https://money-manager-e3253-default-rtdb.firebaseio.com/costs.json')
  //   .then(async(res)=> {
  //     const data = await res.json()
  //     dispatch(costsActions.replaceCosts(data))
  //     setIsLoading(false)

  //   }
  //     )
  //   .catch(e=> {console.log(e); setIsLoading(false)})
  // },[dispatch])

  // useEffect(() =>{
  //   if (!isFirst){
  //     fetch('https://money-manager-e3253-default-rtdb.firebaseio.com/costs.json',{
  //       method: 'PUT',
  //       body: JSON.stringify(costs)
  //     }).catch(e=>console.log(e))

  //   }
  //   isFirst=false
  // },[costs])

  return (
    <div className="w-full h-full overflow-auto bg-tertiary pt-24">
      {isModalOpen &&
        ReactDOM.createPortal(
          <AddCostModal />,
          document.getElementById("modal")
        )}

      <Container>
        <Banner total={total} />

        {isLoading && (
          <div className="w-full p-4 flex items-center justify-center bg-red-700/20 rounded-xl my-5 text-orange-900">
            Loading...
          </div>
        )}
        {!isLoading && (!filteredCosts || filteredCosts.length === 0) && (
          <div className="w-full p-4 flex items-center justify-center bg-red-700/20 rounded-xl my-5 text-red-900">
            No Costs
          </div>
        )}
        {filteredCosts.length > 0 &&
          filteredCosts.map((cost) => (
            <div
              onClick={() => {
                removeCost(cost.id);
              }}
              className="cursor-pointer w-full bg-black/10 my-3 rounded-xl p-3 flex flex-wrap items-center content-center justify-between gap-5 hover:bg-red-300"
              key={cost.id}
            >
              <h1 className="p-4 bg-primary text-light font-bold text-xl rounded-xl">
                ${new Intl.NumberFormat().format(cost.cost)}
              </h1>
              <h1 className=" text-primary capitalize grow font-bold text-xl rounded-xl">
                {cost.title}
              </h1>
              <h1>{new Date(cost.date).toLocaleDateString()}</h1>
            </div>
          ))}
      </Container>
    </div>
  );
}

export default Home1;
