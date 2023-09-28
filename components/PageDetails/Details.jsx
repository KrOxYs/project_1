import React from "react";
import CustomizedDialogs from "../details/ImgDialog";
import HotelsDetails from "./HotelsDetails";

function Dialog(props) {
  const {
    actionsPannel,
    children,
    color = "bg-red",
    handleCloseDialog,
    size = "w-3/3",
    title,
    h,
    largeImage,
  } = props;

  const CloseIcon = () => {
    return (
      <span className="absolute top-0  text-center right-[340px] p-3">
        <button
          onClick={handleCloseDialog}
          className={`focus:outline-none focus:border-none hover:${color}-700 p-2 rounded-full inline-flex items-center`}
        >
          <svg
            class="fill-current text-white hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </button>
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex transition ease-in-out duration-700">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={`inline-block columns-2 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[900px] gap-52 `}
            role="dialog"
          >
            <div className="">
              <div className=" bg-slate-800 w-[550px] rounded px-8 pt-6 pb-8 flex flex-col overflow-y-auto h-auto">
                {/* {children} */}
                <CustomizedDialogs
                  h={h}
                  largeImage={largeImage}
                  title={title}
                />
              </div>
            </div>
            <div className="  w-[300px] pt-5 bg-white rounded-lg">
              <HotelsDetails h={h} />
              <span className="">{CloseIcon()}</span>
            </div>

            {/* {actionsPannel} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
