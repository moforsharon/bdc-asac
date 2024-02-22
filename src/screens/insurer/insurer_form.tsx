import { Button, CustomInput, PasswordInput, Text, Dropdown } from "@/src/components";
import Head from "next/head";
import '../../../styles/globals.css'
import { useState } from "react";
import { FaCheckCircle, FaDownload } from 'react-icons/fa';
import axios from "axios";
interface IFormData {
  name: string; // Define the type for insuranceName property
  product_type: string
  product_price: number,
  product_validity: number;

}
interface TabItemProps {
  title: string;
  active: boolean;
  onClick?: () => void;
}
const TabItem: React.FC<TabItemProps> = ({ title, active, onClick }) => {
  return (
    <div
      className={`flex items-center text-black whitespace-nowrap cursor-pointer px-2  md:px-1 lg:px-6 xl:px-6 py-1 text-sm mr-4 ${
        active ? "text-black font-bold  border-b-2 border-black" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
const InsurerForm = () => {
  const [activeTab, setActiveTab] = useState("New Insurance");
const [formData, setFormData] = useState<IFormData>({ name: "", product_type:"", product_price: 0, product_validity: 0 });
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const [selectedInsurance, setSelectedInsurance] = useState<string>("");
  const [selectedValidity, setSelectedValidity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  

  const handleInsuranceChange = (value: string) => {
    setSelectedInsurance(value);
    handleChange("product_type", value);
  };
  const handleValidityChange = (value: string) => {
   let newVal = parseInt(value)
    setSelectedValidity(newVal); 
    // handleChange("product_validity", newVal)
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let newVal = parseInt(e.target.value)
    setPrice(newVal); 
  };


// Modified API URL with reverse proxy service
const proxiedApiUrl = "/api/createInsuranceCoupon";
    const handleSubmitClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
     e.preventDefault();
      setActiveTab("Finished");
          try {
      const response = await axios.get(`https://afriscience-59aa5aca58b6.herokuapp.com/api/create_insurance_product/?name=${formData.name}&product_type=${formData.product_type}&product_price=${price}&product_validity=${selectedValidity}`);
      console.log(response.data); // Handle success response
      setActiveTab("Finished");
    } catch (error) {
      console.error('Error submitting form data:', error); // Handle error
    }
  };
  return (
    <div className="">
      <Head>
        <title>{"Create Insurance | Insurer"}</title>
      </Head>
      <div className=" w-[100%] h-screen bg-background overflow-auto">
        <div className="w-[100%] h-[200px] md:h-[120px] bg-[black]"></div>
        <div className="w-full flex justify-around items-center">
          <div className="w-[90%] md:w-[70%] h-[80vh] md:h-[520px] mt-[-80px] md:mt-[-40px] bg-white rounded-md">
            {/* navigation tab */}
            <div className="w-full flex justify-around items-center border border-b-1 py-1 rounded-md">
              <div className="flex  ">
                <TabItem
                  title="New Insurance"
                  active={activeTab === "New Insurance"}
                  onClick={() => handleTabClick("New Insurance")}
                />
                <TabItem
                  title="Finished"
                  active={activeTab === "Finished"}
                />
              </div>
            </div>
            {activeTab === "New Insurance" && (<div>
              <div className="w-full flex justify-around items-center mt-5">
                <Text
                  text="Create Insurance"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  variant="large"
                />
              </div>
              <div className="w-full flex flex-col justify-around items-center">
                <div className="w-[90%] md:w-[70%] flex flex-col justify-around items-center mt-5">
                  <CustomInput
                    label="Name of Insurance"
                    placeholder={"Enter insurance name"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData?.name}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
                    
                  />
                  <Dropdown
                    placeholder="Select"
                    data={[
                        "Life Insurance",
                        "Health Insurance",
                        "Auto Insurance",
                        "Cargo Insurance",
                        "Homeowners Insurance",
                        "Renters Insurance",
                        "Property Insurance",
                        "Business Insurance",
                        "Travel Insurance",
                        "Pet Insurance",
                        "Disability Insurance",
                        "Long-Term Care Insurance",
                        "Liability Insurance"
                    ]}
                    disabledOptions={[0,1, 3, 4,5,6,7,8,9,10,11,12]}
                    label="Type of Insurrance"
                    className="mb-2 ml-0 "
                    labelSize="12px"
                    value={selectedInsurance} // Pass the selected value
                    onChange={handleInsuranceChange}
                  />
                  <CustomInput
                    label="Price"
                    placeholder={"Enter price of insurance"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={price} // Pass the selected value
                    onChange={handlePriceChange}
                    type="number"
                  />
                  <Dropdown
                    placeholder="How long is the insurance valid"
                    data={[
                      "2",
                      "6",
                      "12"
                    ]}
                    label="Validity"
                    className="mb-2 ml-0 "
                    labelSize="12px"
                    value={selectedValidity}
                    onChange={handleValidityChange}
                  />
                  <CustomInput
                    label="Number to generate"
                    placeholder={"Enter number of copies to be generated"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    type="number"
                    value=""
                    
                  />
                  <Button
                    text="Submit"
                    onClick={handleSubmitClick}
                    className="w-full mt-4 md:mt-4 text-center bg-black text-white"
                    variant="small"
                    type="primary"
                  />
                </div>
              </div>
            </div>)}
            {activeTab === "Finished" && (
              <div>
                <div className="w-full flex flex-col justify-around items-center mt-5">
                  <FaCheckCircle size="60px" fill="#03fc8c"/>
                  <Text
                    text="Insurance created successfully"
                    style={{ textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}
                    variant="large"
                  />
                </div>
                <div className="w-full flex flex-col justify-around items-center mt-8">
                  <Text
                    text="Name of Insurance : Name"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Type of Insurance : Auto Insurance"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Price : 100,000 FCFA"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Validity : 6 Months"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Batch Number : 00000001"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                </div>
                <div className="w-full flex justify-between items-center mt-8">
                  <Button
                    text="Create new insurance"
                    onClick={() => handleTabClick("New Insurance")}
                    className="w-1/2 mt-4 md:mt-4 mx-4 text-center bg-transparent text-black"
                    variant="small"
                    type="primary"
                  />
                  <button className="rounded-md bg-primary-dark-grey shadow px-4 py-2 flex justify-center items-center w-1/2 mt-4 md:mt-4 mx-4 text-center bg-black text-white">
                    <FaDownload fill="#fff"/>
                    <Text
                      text="Print"
                      className="ml-3"
                      variant="small"
                      
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurerForm;
