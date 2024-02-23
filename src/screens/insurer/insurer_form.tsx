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
// Define an interface to describe the shape of the response data
interface ApiResponse {
  status: string;
  item: {
    id: number;
    name: string;
    product_type: string;
    product_price: number;
    product_validity: number;
  };
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
//spinner component 
const Spinner = () => {
  return (
    <button
    type="submit"
    className="w-full flex justify-around mt-4 md:mt-4 text-center bg-black text-white py-2 rounded-md"
  >
      <div className="w-4 h-4 relative">
      <div className="w-4 h-4 absolute border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <div className="w-4 h-4 absolute border-2 border-white border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-4 h-4 absolute border-2 border-white border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
    </div>
    </button>
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
  const [price, setPrice] = useState<number | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  

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
  
const apiUrl = `${process.env.NEXT_PUBLIC_SERVERLESS_FUNCTION_URL}/create_insurance_product/`;
    const handleSubmitClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
     e.preventDefault();
     if (formData.name === "" || formData.product_type === "" || price === 0 || price === null || selectedValidity === 0 ) {
      setShowAlert(true)
     }else {
     setIsSubmitting(true);
          try {
          const response = await axios.get('/api/createInsuranceCoupon', {
      params: {
        name: formData.name,
        product_type: formData.product_type,
        product_price: price,
        product_validity: selectedValidity
      }
    });
            console.log(response.data);
            setResponse(response.data) 
            setIsSubmitting(false);   // Handle success response
            if (response.data.status === "success") {
              console.log(response)
              setActiveTab("Finished");
            } else {
              //handle some other case
            }
    } catch (error) {
      console.error('Error submitting form data:', error); // Handle error
      setIsSubmitting(false);
    }
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
              {showAlert && <div  className="w-[90%] md:w-[70%] flex flex-col justify-start items-center mt-5">
                <p className="text-[#e73b3b] text-xs">*Please fill all form fields</p>
              </div>}
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
                    label="Validity (months)"
                    className="mb-2 ml-0 "
                    labelSize="12px"
                    value={selectedValidity}
                    onChange={handleValidityChange}
                  />
                  {/* <CustomInput
                    label="Number to generate"
                    placeholder={"Enter number of copies to be generated"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    type="number"
                    value=""
                    
                  /> */}
                  {isSubmitting ? (
                    <Spinner /> 
                  ) : (
                    <Button
                      text="Submit"
                      onClick={handleSubmitClick}
                      className="w-full mt-4 md:mt-4 text-center bg-black text-white"
                      variant="small"
                      type="primary"
                    />
                  )}
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
                  {response !== null && (
                <div className="w-full flex flex-col justify-around items-center mt-8">
                  <Text
                    text={`Name of Insurance: ${response.item.name}`}
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text={`Type of Insurance : ${response.item.product_type}`}
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text={`Price : ${response.item.product_price} FCFA`}
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                      text={`Validity : ${response.item.product_validity} Months`}
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  {/* <Text
                    text="Batch Number : 00000001"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  /> */}
                </div>)}
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
