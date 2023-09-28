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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            marginLeft: 30,
            padding: 0,
            // color: (theme) => theme.palette.blue
          }}
          className=" bg-blue-400 hover:bg-none"
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function LoadMore({ h }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);

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
    <div className=" bg-white">
      <Button  onClick={handleClickOpen}>
        <div
          className="flex blur-none rounded-lg cursor-pointer"
          // onClick={toggleModal}
        >
          <span className=" absolute top-10 left-0 flex flex-row  w-full rounded-lg text-white">
            <AiOutlinePlus className="mt-1" />
            <span className="ml-2">Load More</span>
          </span>
          <div className="">
            {testImg.slice(1, 3).map((item, idx) => (
              <div className=" h-[50px] w-[50px]  ">
                <img
                  src={item?.url}
                  alt=""
                  className=" grid grid-flow-col rounded-lg "
                />
              </div>
            ))}
          </div>
          <div>
            {testImg.slice(1, 3).map((item, idx) => (
              <div className=" h-[50px] w-[50px] ">
                <img
                  src={item?.url}
                  alt=""
                  className=" grid grid-flow-col rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </Button>
      <div className="">
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{ backfaceVisibility: "" }}
          className=" scrollbar-hide overflow-hidden h-[765px]"
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className=" bg-transparent outline-none m-0 p-0 ml-36"
          ></BootstrapDialogTitle>
          <DialogContent
            dividers
            className=" bg-transparent w-full h-[1300px] flex gap-5"
          >
            <div>
              <span
                onClick={goBack}
                className=" p-4 rounded-full absolute top-[36%] -translate-x-[20px] cursor-pointer transition-all hover:scale-90 hover:bg-white"
              >
                <MdChevronLeft className=" h-5 w-5" />
              </span>
              <img src={largeImage} alt="" className=" w-[600px] h-[580px]" />
              <span
                onClick={goForward}
                className=" bg-transparent p-4 rounded-full absolute top-[36%] left-[58%] cursor-pointer transition-all hover:scale-90 hover:bg-white"
              >
                <MdChevronRight className="" />
              </span>
            </div>
            <div className=" w-[300px]">
              <img src={largeImage} alt="" className=" w-[300px] h-[300px]" />
            </div>
          </DialogContent>
          <DialogContent dividers className=" bg-transparent flex h-[150px]">
            <img src={largeImage} alt="" className=" w-[50px] h-[50px]" />
            <img src={largeImage} alt="" className=" w-[50px] h-[50px]" />
            <img src={largeImage} alt="" className=" w-[50px] h-[50px]" />
            <img src={largeImage} alt="" className=" w-[50px] h-[50px]" />
            <img src={largeImage} alt="" className=" w-[50px] h-[50px]" />
          </DialogContent>
        </BootstrapDialog>
      </div>
    </div>
  );
}
