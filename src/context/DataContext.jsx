import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const DataContext = createContext();

// Provider Component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    people:[],
    bannerImage:"",
    promotionalBannerImage:"",
    platforms:[],
    topOffers:[],
    productShowcase:[],
    patterns:[],
    events:[],
    franchises:[],
    members:[],
    luckyDrawWinners:[],
  });

  const [cart, setCart] = useState([]);
  // Fetch mock data from JSON files
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  
  return (
    <DataContext.Provider value={{data, cart , setCart}}>
      {children}
    </DataContext.Provider>
  );
};

// Hook to use the context
export const useDataContext = () => {
  return useContext(DataContext);
};
