import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
         car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  // below $ is not being used for displaying value like in template string sytax with backticks
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
