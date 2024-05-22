import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitem, setCarttitem] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodlist] = useState([]);
  
  const addtocart = (itemId) => {
    if (!cartitem[itemId]) {
      setCarttitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCarttitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      axios.post("http://localhost:5000/add", { itemId, userId: token }, { headers: { token } })
        .catch(error => console.error('Error adding to cart:', error));
    }
  };

  const remove = (itemId) => {
    if (cartitem[itemId] > 1) {
      setCarttitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      const { [itemId]: _, ...rest } = cartitem;
      setCarttitem(rest);
    }
    if (token) {
      axios.post("http://localhost:5000/remove", { itemId, userId: token }, { headers: { token } })
        .catch(error => console.error('Error removing from cart:', error));
    }
  };

  const getTotal = () => {
    let Total = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          Total += itemInfo.price * cartitem[item];
        }
      }
    }
    return Total;
  };

  const url = "http://localhost:5000";
  const contextvalue = {
    food_list,
    cartitem, setCarttitem, addtocart, remove, getTotal, token, setToken, url
  };

  const fetchfoodlist = async () => {
    try {
      const res = await axios.get("http://localhost:5000/list");
      setFoodlist(res.data.data);
    } catch (error) {
      console.error('Error fetching food list:', error);
    }
  };

  const loadcartdata = async (token) => {
    try {
      const res = await axios.post("http://localhost:5000/get", { userId: token }, { headers: { token } });
      setCarttitem(res.data.cartdata);
    } catch (error) {
      console.error('Error loading cart data:', error);
    }
  };

  useEffect(() => {
    async function loaddata() {
      await fetchfoodlist();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadcartdata(savedToken);
      }
    }
    loaddata();
  }, []);

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
