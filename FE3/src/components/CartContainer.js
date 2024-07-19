import { useCallback } from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = ({ className = "" }) => {

  const addItemsToCart = async (cartItems) => {
    const payload = {
      cart: cartItems
    };
  
    try {
      const response = await axios.post('https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Orders/Cart', payload);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error adding items to cart:', error);
    }
  };
  
  
  const cartItems = [
    {
      accessoryID: "null",
      mainDiamondID: "D005",
      subDiamondID: ["P001000"]
    }
  ];

  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    cartItems.forEach(item => {
      fetchDiamondDetails(item.mainDiamondID, item.subDiamondID);
    });
  }, []);
  
  const fetchDiamondDetails = async (mainDiamondID, subDiamondIDs) => {
    try {
      const mainDiamondResponse = await axios.get(`https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Orders/Get?diamondID=${mainDiamondID}`);
      if (mainDiamondResponse.data.status === 1) {
        setDiamonds(diamonds => [...diamonds, mainDiamondResponse.data.data]);
      } else {
        console.error("Failed to get main diamond data:", mainDiamondResponse.data.message);
      }
      for (const subDiamondID of subDiamondIDs) {
        const subDiamondResponse = await axios.get(`https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Orders/Get?diamondID=${subDiamondID}`);
        if (subDiamondResponse.data.status === 1) {
          setDiamonds(diamonds => [...diamonds, subDiamondResponse.data.data]);
        } else {
          console.error("Failed to get sub diamond data:", subDiamondResponse.data.message);
        }
      }
    } catch (error) {
      console.error("Error fetching diamond details:", error);
    }
  };


  return (
    <section
      className={`absolute top-[47.2px] left-[0px] w-full flex flex-col items-center justify-start py-0 px-5 box-border max-h-[999999px] max-w-full z-[2] text-left text-lgi-3 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[1030px] max-h-[999999px] mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-[9.4px] px-[15px] pb-[10.1px] box-border max-h-[999999px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px] box-border max-h-[999999px]">
            <div className="self-stretch relative tracking-[0.5px] leading-[25px] capitalize">
              shopping bag
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-h-[999999px] max-w-full z-[1] text-xs text-wwwbrilliantearthcom-mine-shaft">
              <div className="flex-1 flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                <div className="h-[766px] flex-1 overflow-y-auto flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border max-h-[999999px] max-w-full mq1225:h-auto">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2130.4px] box-border max-h-[999999px] max-w-full mq850:pb-[585px] mq850:box-border mq1225:pb-[900px] mq1225:box-border">
                    <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] max-w-full">
                    <table className="table table-hover tm-table-small tm-product-table w-full ">
                    
                  <thead>
                    <tr>
                      <th scope="col">OrderID</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Total</th>
                      <th scope="col">MainDiamondID</th>
                      <th scope="col">SubDiamondID</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {diamonds.map((diamond) => (
                      <tr key={diamond.diamondID}>
                        <td className="tm-product-name">{diamond.orderID}</td>
                        <td>{diamond.email}</td>
                        <td>{diamond.totalPrice}</td>
                        <td>{diamond.cutGrade}</td>
                        <td>{diamond.price}</td>
                        <td>{diamond.mainDiamondID}</td>
                        <td>{diamond.subDiamondID}</td>
                      </tr>
                    ))}
                  </tbody>
                  
                </table>
                </div>
                </div>
                </div>
                </div>
                </div>
      
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
