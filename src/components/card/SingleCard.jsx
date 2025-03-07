import { Box } from "@mui/material";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon";

export default function SingleCard({ image, title, price, id ,icon}) {
  const navigate = useNavigate();
  const location=useLocation()
 

  function handleProduct() {
    if(location.pathname==="/product/:id"){
      return
    }else{
    navigate(`/product/${id}`);}
  }

 
  return (
    <>
      <Box
        onClick={handleProduct}
        component="div"
        width="20rem"
        margin="5rem auto"
        boxShadow="0px 0px 10px 10px rgba(0,0,0,0.2)"
        padding="1.5rem"
        borderRadius="1rem"
      >
        <img src={image} alt="image" width="full" />
        <h2 className="mb-[1rem] font-bold mt-[3rem]">{title}</h2>
        <Box
          component="div"
          marginTop="1rem"
          display="flex"
          justifyContent="space-between"
        >
          <span>${price}</span>
        </Box>
      </Box>
          {icon}
    </>
  );
}
