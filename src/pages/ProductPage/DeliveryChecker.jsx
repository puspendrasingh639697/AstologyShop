import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";

const DeliveryChecker = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincode.length !== 6) {
      setDeliveryStatus({
        available: false,
        message: "Please enter a valid 6-digit postal/pincode."
      });
      return;
    }

    setDeliveryStatus({
      available: true,
      message: "Delivery available within 3-5 business days. Cash on Delivery (COD) is available."
    });
  };

  return (
    <></>
  );
};

export default DeliveryChecker;