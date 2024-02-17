import { Button, CustomInput, PasswordInput, Text, Dropdown } from "@/src/components";
import Head from "next/head";
import '../../../styles/globals.css'
import { useState } from "react";
import { FaCheckCircle, FaDownload } from 'react-icons/fa';

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
const InsureeForm = () => {
  const [activeTab, setActiveTab] = useState("New Insurance");
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
    const handleSubmitClick = () => {
    setActiveTab("Finished");
  };
  return (
    <div className="">
      <Head>
        <title>{"Upload Insurance | Insuree"}</title>
      </Head>
      <div className=" w-[100%] h-screen bg-background overflow-auto">
        <div className="w-[100%] h-[200px] md:h-[120px] bg-[black]"></div>
        <div className="w-full flex justify-around items-center">
          <div className="w-[90%] md:w-[70%] h-[80vh] md:h-[520px] mt-[-80px] md:mt-[-40px] bg-white rounded-md">
            {/* navigation tab */}
            <div className="w-full flex justify-around items-center border border-b-1 py-1 rounded-md">
              <div className="flex  ">
                <TabItem
                  title="Upload Document"
                  active={activeTab === "New Insurance"}
                  onClick={() => handleTabClick("New Insurance")}
                />
                <TabItem
                  title="Finished"
                  active={activeTab === "Finished"}
                />
              </div>
            </div>
            {activeTab === "New Insurance" && (<div className="h-full flex flex-col justify-center items-center">
              <div className="w-full flex justify-around ">
                <Text
                  text="Upload document for verification"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  variant="large"
                />
              </div>
              <div className="w-full flex flex-col justify-around items-center">
                <div className="w-[90%] md:w-[70%] flex flex-col justify-around items-center mt-5">
                  <CustomInput
                    label="Choose file"
                    placeholder={"Click here to select"}
                    className="mb-2 mr-0 "
                    labelSize="12px"
                    type="file"
                  />
                <div className="w-full flex  justify-around">
                    <Button
                        text="Upload"
                        onClick={() => handleSubmitClick()}
                        className="w-1/2 mt-4 md:mt-4 text-center bg-black text-white"
                        variant="small"
                        type="primary"
                    />
                </div>

                </div>
              </div>
            </div>)}
            {activeTab === "Finished" && (
              <div>
                <div className="w-full flex flex-col justify-around items-center mt-5">
                  <FaCheckCircle size="60px" fill="#03fc8c"/>
                  <Text
                    text="Verification Successful"
                    style={{ textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}
                    variant="large"
                  />
                </div>
                <div className="w-full flex flex-col justify-around items-center mt-8">
                  <Text
                    text="Insured, Name and Address  : Name"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Profession"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Police Number : noiho"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Valid from : 12/10/23      to : 1/3/24"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Vehicle(make) : "
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Registration or chassis number : "
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Type : "
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                  <Text
                    text="Use"
                    style={{ textDecoration: "none", fontSize: "15px"}}
                    variant="normal"
                    className=""
                  />
                </div>
                <div className="w-full flex justify-around items-center mt-8">
                  <button className="rounded-md bg-primary-dark-grey shadow px-4 py-2 flex justify-center items-center w-1/2 mt-4 md:mt-4 mx-4 text-center bg-black text-white" onClick={() => handleTabClick("New Insurance")}>
                    <Text
                      text="Back"
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

export default InsureeForm;
