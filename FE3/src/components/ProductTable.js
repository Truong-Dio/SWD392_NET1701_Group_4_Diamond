import { useCallback } from "react";
import PropTypes from "prop-types";
import Navpage from "./Navpage";
import { useState, useEffect } from "react";
import axios from "axios";


const productTable = ({ className = "" }) => {
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    fetchDiamonds();
  }, []);

  const fetchDiamonds = async () => {
    try {
      const response = await axios.get('https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/GetAll');
          if (response.data.status === 1) {
        setDiamonds(response.data.data);
      } else {
        console.error("Faid to get data:", response.data.message);
      }
    } catch (error) {
      console.error("Eror get data:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  console.log(diamonds)
  return (
    <div className="w-full relative bg-wwwbrilliantearthcom-nero overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-smi text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106">
      <Navpage />
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xs-4 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 ${className}`}
    >
      
          
          <div className="self-stretch flex flex-row items-start justify-start max-h-[999999px] max-w-full z-[1] text-xs text-wwwbrilliantearthcom-mine-shaft">
              <div className="flex-1 flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                <div className="h-[766px] flex-1 overflow-y-auto flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border max-h-[999999px] max-w-full mq1225:h-auto">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2130.4px] box-border max-h-[999999px] max-w-full mq850:pb-[585px] mq850:box-border mq1225:pb-[900px] mq1225:box-border">
                    <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] max-w-full">
                    <table className="table table-hover tm-table-small tm-product-table w-full ">
                    
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">SHAPE</th>
                      <th scope="col">CARAT</th>
                      <th scope="col">CUT</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">COLOR</th>
                      <th scope="col">CLARITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {diamonds.map((diamond) => (
                      <tr key={diamond.diamondID}>
                        <td className="tm-product-name">{diamond.diamondID}</td>
                        <td>{diamond.shape}</td>
                        <td>{diamond.caratWeight}</td>
                        <td>{diamond.cutGrade}</td>
                        <td>{diamond.price}</td>
                        <td>{diamond.colorGrade}</td>
                        <td>{diamond.clarityGrade}</td>
                      </tr>
                    ))}
                  </tbody>
                  
                </table>
                </div>
                </div>
                </div>
                </div>
                </div>
                {/* </div>
                </div> */}
    </section>
    </div>
  );
};

productTable.propTypes = {
  className: PropTypes.string,
};

export default productTable;
