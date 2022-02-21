import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { costsActions } from "../store/costs-slice";

const Banner = ({ total }) => {
  const dispatch = useDispatch();
  console.log("banner rendered");
  const costs = useSelector((state) => state.costs.costs);
  const startDate = useSelector((state) => state.costs.startDate);
  const endDate = useSelector((state) => state.costs.endDate);

  useEffect(() => {
    dispatch(costsActions.filter());
  }, [dispatch, costs]);

  const onStartDateChange = (e) => {
    const start = new Date(e.currentTarget.value).toISOString().slice(0, 10);
    dispatch(costsActions.changeStartDate(start));
  };
  const onEndDateChange = (e) => {
    const end = new Date(e.currentTarget.value).toISOString().slice(0, 10);
    dispatch(costsActions.changeEndDate(end));
  };

  const dateInputClasses = `
    bg-white/40 
    p-2 
    rounded-xl 
  `;

  return (
    <div className="w-full  bg-secondary rounded-2xl  p-4 flex flex-col ">
      <div className="flex w-full flex-wrap">
        <div className="flex flex-col items-center justify-center grow">
          <label htmlFor="start-date">Start Date: </label>
          <input
            id="start-date"
            type="date"
            className={dateInputClasses}
            value={startDate}
            onChange={onStartDateChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center grow">
          <label htmlFor="end-date">End Date: </label>
          <input
            id="end-date"
            type="date"
            className={dateInputClasses}
            value={endDate}
            onChange={onEndDateChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center grow">
          <label htmlFor="end-date">Total: </label>
          <div className={dateInputClasses}>
            ${new Intl.NumberFormat().format(total)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
