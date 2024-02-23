import { Button, CustomInput, PasswordInput, Text, Dropdown } from "@/src/components";
import Head from "next/head";
import '../../../styles/globals.css'
import { useEffect, useState } from "react";
import { FaCheckCircle, FaDownload } from 'react-icons/fa';
import axios from "axios";



interface IFormData {
  insured_name:string ,
  insurance_insured_address: string,
  insurance_insured_profession: string,
  insurance_policenumber: string,
  insurance_validity:number,
  insurance_product: number,
  insurance_vehicle_make: string,
  insurance_vehicle_registration_chassis: string,
  insurance_vehicle_type: string,
  insurance_category_of_use: number,

}
interface IResponseData {
  id: number;
  insured_name:string ,
  insurance_insured_address: string,
  insurance_insured_profession: string,
  insurance_policenumber: string,
  insurance_validity:number,
  insurance_product: number,
  insurance_vehicle_make: string,
  insurance_vehicle_registration_chassis: string,
  insurance_vehicle_type: string,
  insurance_category_of_use: number,

}
interface ApiResponse {
  status: string;
  item: IResponseData;
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
const ResellerForm = () => {
    const [activeTab, setActiveTab] = useState("New Insurance");
    const [selectedType, setSelectedType] = useState<string>("");
    const [selectedValidity, setSelectedValidity] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
    const [response, setResponse] = useState<ApiResponse | null>(null)
    const [formData, setFormData] = useState<IFormData>({ insured_name: "", insurance_insured_address:"", insurance_insured_profession: "", insurance_policenumber: "", insurance_vehicle_make: "", insurance_vehicle_registration_chassis: "", insurance_category_of_use: 0, insurance_product: 0, insurance_vehicle_type: "", insurance_validity: 0 });
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
      const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    };
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    handleChange("insurance_vehicle_type", value);
  };

  const handleValidityChange = (value: string) => {
    const newVal = parseInt(value)
    setSelectedValidity(newVal); 
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newVal = parseInt(e.target.value)
    setSelectedCategory(newVal); 
  };
  const handleSubmitClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.insured_name === "" || formData.insurance_insured_address === "" || formData.insurance_insured_profession === "" ||
    formData.insurance_policenumber === "" || selectedValidity === null || selectedProduct === null || formData.insurance_vehicle_make === ""
    || formData.insurance_vehicle_registration_chassis === "" || formData.insurance_vehicle_type === "" || selectedCategory === null) {
     setShowAlert(true)
    }else {
    setIsSubmitting(true);
         try {
         const response = await axios.get('/api/createInsuranceCoupon', {
     params: {
      insured_name:formData.insured_name,
      insurance_insured_address: formData.insurance_insured_address,
      insurance_insured_profession: formData.insurance_insured_profession,
      insurance_policenumber: formData.insurance_policenumber,
      insurance_validity:selectedValidity,
      insurance_product: selectedProduct,
      insurance_vehicle_make: formData.insurance_vehicle_make,
      insurance_vehicle_registration_chassis: formData.insurance_vehicle_registration_chassis,
      insurance_vehicle_type: formData.insurance_vehicle_type,
      insurance_category_of_use: selectedCategory,
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
  const [products, setProducts] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/getInsuranceProducts');
        if (response) {
          setProducts(response.data);
          console.log(products)
        } else {
          console.error('Failed to fetch products:', response);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="">
      <Head>
        <title>{"Create Insurance | Reseller"}</title>
      </Head>
      <div className=" w-[100%] h-screen bg-background overflow-auto">
        <div className="w-[100%] h-[200px] md:h-[120px] bg-[black]"></div>
        <div className="w-full flex justify-around items-center">
          <div className="w-[90%] md:w-[70%] h-[80vh] md:h-[520px] mt-[-80px] md:mt-[-40px] bg-white rounded-md overflow-y-scroll scroll-style pb-10">
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
                    label="Insured Name"
                    placeholder={"Enter name "}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData.insured_name}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("insured_name", e.target.value)}
                  />
                  <CustomInput
                    label="Insured Address"
                    placeholder={"Enter address"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData.insurance_insured_address}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("insurance_insured_address", e.target.value)}
                  />
                  <CustomInput
                    label="Profession"
                    placeholder={"Enter Profession"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData.insurance_insured_profession}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("insurance_insured_profession", e.target.value)}
                    />
                    <CustomInput
                    label="Police Number"
                    placeholder={"Enter police number"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData.insurance_policenumber}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("insurance_policenumber", e.target.value)}
                  /> 
                  {/* Dropdown for product */}
                  {products !== null && (
                  <div
                    className={`flex flex-col  justify-start align-start w-full  mb-2 ml-0`}
                  >
                    <Text
                      variant="small"
                      className={`!text-[12px] capitalize !mb-[3px]`}
                      color="primary"
                      text="Insurance product"
                    />
                    <select
                      name=""
                      id=""
                      className={`flex justify-between items-center md:px-[16px] px-[21.5px] py-1 text-grey3 border-grey3 border-[1px] rounded-lg bg-transparent text-[13px] flex-wrap h-10 gap-2  overflow-x-auto`}
                      value={selectedProduct}
                      onChange={(event) => {
                        const newValue = parseInt(event.target.value);
                        setSelectedProduct(newValue);
                        console.log("Selected value:", newValue);
                      }}
                    >
                      <option value="">Select</option>
                      {products.items.map(product => (
                        <option
                          key={product.id}
                          value={product.id}
                          className="!mb-0 sm:text-[12px] xl:text-[14px] "
                        >
                          {product.name}
                        </option>
                      ))}
                      
                    </select>
                  </div>)}
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
                        value={selectedValidity} // Pass the selected value
                        onChange={handleValidityChange}
                    />               
                  <CustomInput
                    label="Vehicle Make"
                    placeholder={"Vehicle make"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData.insurance_vehicle_make}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("insurance_vehicle_make", e.target.value)}
                  />
                  <CustomInput
                    label="Registration or chassis number"
                    placeholder={"enter registration or chassis number"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    value={formData.insurance_vehicle_registration_chassis}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("insurance_vehicle_registration_chassis", e.target.value)}
                  />
                  <Dropdown
                    placeholder="Type"
                    data={ [
                            "Passenger Cars",
                            "SUVs (Sport Utility Vehicles)",
                            "Trucks",
                            "Vans",
                            "Motorcycles",
                            "Bicycles",
                            "Buses",
                            "Tractors",
                            "Trailers",
                            "Recreational Vehicles (RVs)",
                            "Limousines",
                            "Electric Vehicles (EVs)",
                            "Hybrid Vehicles",
                            "Off-road Vehicles",
                            "Convertibles",
                            "Coupes",
                            "Sedans",
                            "Hatchbacks",
                            "Pickup Trucks",
                            "Dump Trucks"
                            ]}
                    label="Vehicle type"
                    className="mb-2 ml-0 "
                    labelSize="12px"
                    value={selectedType} // Pass the selected value
                    onChange={handleTypeChange}
                  />
                <CustomInput
                    label="Category of use 1,2,3,4, to 10"
                    placeholder={"use"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    type="number"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  />
                  {isSubmitting ? (
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
                      text={`Insured, Name and Address  : ${response.item.insured_name}, ${response.item.insurance_insured_address}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Profession : ${response.item.insurance_insured_profession}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Police Number : ${response.item.insurance_policenumber}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Insurance Product : ${response.item.insurance_product}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Valid for ${response.item.insurance_validity} months`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Vehicle(make) : ${response.item.insurance_vehicle_make}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Registration or Chassis number: ${response.item.insurance_vehicle_registration_chassis}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Vehicle Type: ${response.item.insurance_vehicle_type}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                    <Text
                      text={`Category of use: ${response.item.insurance_category_of_use}`}
                      style={{ textDecoration: "none", fontSize: "15px"}}
                      variant="normal"
                      className=""
                    />
                  </div>
                )}
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

export default ResellerForm;
