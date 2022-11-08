import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addItem());
  };
  const remove = () => {
    dispatch(deleteItem());
  };
  return (
    <div className="cart">
      <h2>Number of items in Cart is {state.numOfItems}:</h2>
      <button className="green" onClick={add}>
        Add Item to Cart
      </button>
      <button
        className="red"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={remove}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;
