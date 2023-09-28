import react, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   // "& .MuiDialogContent-root": {
//   //   padding: theme.spacing(2),
//   // },
//   // "& .MuiDialogActions-root": {
//   //   padding: theme.spacing(1),
//   //   width:"100%",
//   // },
// }));

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 0,
//             marginLeft: 30,
//             padding: 0,
//             // color: (theme) => theme.palette.blue
//           }}
//           className=" bg-blue-400 hover:bg-none"
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

export default function CustomizedDialogs({ h, title }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);
  const [active, setActive] = useState();

  console.log("h", h);

  const testImg = h.images;
  console.log("testImg", testImg);
  const imgCar = testImg.map((img) => img.url);
  console.log("imgCar", imgCar);

  const largeImage = testImg[value].url;
  console.log("largeImage", largeImage);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === testImg.length - 1
      ? setValue(testImg.length - 1)
      : setValue((prev) => prev + 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <div>
        <div className="rounded-md" onClick={handleClickOpen}>
          <img
            src={largeImage}
            alt=""
            className=" w-full h-[200px] rounded-md cursor-pointer "
          />
        </div>
      </div>
      <div className=" flex place-content-center" onClick={handleClickOpen}>
        {testImg.slice(0, 3).map((item, idx) => (
          <div className=" inline-block cursor-pointer relative p-1" key={idx}>
            <img
              className=" w-[150px] h-[50px] block rounded-lg"
              src={item.url}
              // alt={item.name}
              onClick={() => setValue(idx)}
            />
          </div>
        ))}
      </div> */}
      <div className="">
        <b className=" text-white">{title}</b>
        <div>
          <span
            onClick={goBack}
            className=" p-3 rounded-md bg-slate-950 absolute top-[40%] -translate-x-[30px] cursor-pointer transition-all hover:scale-90 hover:bg-white"
          >
            <MdChevronLeft className=" text-gray-500 font-bold text-sm" />
          </span>
          <img
            src={largeImage}
            alt=""
            className=" ml-3 w-[460px] h-[460px] rounded-md"
          />
          <span
            onClick={goForward}
            className=" bg-slate-950 rounded-md p-3 absolute top-[40%] left-[56%] cursor-pointer transition-all hover:scale-90 hover:bg-slate-300 "
          >
            <MdChevronRight className=" text-gray-500 font-bold text-sm" />
          </span>
        </div>
        {/* <div className=" w-[300px]">
          <img src={largeImage} alt="" className=" w-[300px] h-[300px]" />
        </div> */}
        {/* <img src={largeImage} alt="" className=" w-[50px] h-[50px]" /> */}
        {testImg.map((item, idx) => (
          <div className=" inline-block cursor-pointer relative p-2" key={idx}>
            <img
              className=" w-[50px] h-[50px] block rounded-lg"
              src={item.url}
              // alt={item.name}
              onClick={() => setValue(idx)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
