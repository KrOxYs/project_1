import React, { useState } from "react";
// import Spinner from './components/Spinner';
import "tailwindcss/tailwind.css";
import Dialog from "./Details";
import CustomizedDialogs from "../details/ImgDialog";
import HotelsDetails from "./HotelsDetails";

function TestDialog({ h }) {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);

  const testImg = h.images;
  console.log("testImg", testImg);
  const imgCar = testImg.map((img) => img.url);
  console.log("imgCar", imgCar);

  const largeImage = testImg[value].url;
  console.log("largeImage", largeImage);

  const handleSubmit = () => {
    // Handle submit....
  };

  const handleCloseDialog = () => {
    setIsShowDialog(!isShowDialog);
  };

  const DialogActions = (btnColor) => {
    return (
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${btnColor}-600 text-base font-medium text-white hover:${btnColor}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleCloseDialog}
        >
          Cancel
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="container mx-auto flex justify-center ">
        <button
          type="button"
          className=" w-[200px] text-white font-semibold rounded-lg shadow-md focus:outline-none"
          onClick={handleCloseDialog}
        >
          <div>
            <div className="rounded-md" >
              <img
                src={largeImage}
                alt=""
                className=" w-full h-[200px] rounded-md cursor-pointer "
              />
            </div>
          </div>
          <div className=" flex place-content-center" >
            {testImg.slice(0, 3).map((item, idx) => (
              <div
                className=" inline-block cursor-pointer relative p-1"
                key={idx}
              >
                <img
                  className=" w-[150px] h-[50px] block rounded-lg"
                  src={item.url}
                  // alt={item.name}
                  onClick={() => setValue(idx)}
                />
              </div>
            ))}
          </div>
        </button>
      </div>
      {/* Dialog Component */}
      {isShowDialog && (
        <Dialog
          title={"Dialog Title"}
          handleCloseDialog={handleCloseDialog}
          actionsPannel={DialogActions("bg-green")}
          color={"bg-green"}
          h={h}
          largeImage={largeImage}
        ></Dialog>
      )}
    </div>
  );
}

export default TestDialog;
