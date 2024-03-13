"use client";
import { poppins } from "@/app/font";
import { cn } from "@/libs/utlils";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartToast = () => {
  const searchParams = useSearchParams();
  const notify = () => {
    toast.error("Something went wrong...", {
      bodyClassName: cn("text-black", poppins.className),
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Zoom,
    });
  };

  useEffect(() => {
    if (searchParams.get("canceled")) {
      notify();
    }
  }, []);
  return <ToastContainer stacked style={{ borderRadius: "30px" }} />;
};

export default CartToast;
