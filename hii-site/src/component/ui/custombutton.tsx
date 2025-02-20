import React from "react";

type CustomButtonProps = {
  buttontext: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ buttontext }) => {
  return (
    <button className=" bg-Customblack pl-12 pr-12 pt-5 pb-5 rounded-full hover:bg-Customgray ring-1 ring-black/50 ">
      {buttontext}
    </button>
  );
};

export default CustomButton;
