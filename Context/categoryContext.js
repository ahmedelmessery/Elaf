import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useUserContext } from "./userContext";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [isLoading , setIsLoading] = useState(false)
    const {userId} = useUserContext()
    const [categories , setCategories] = useState([])

    
    
    const getCategories = async () => {
      try {
          setIsLoading(true)
          const response = await axios.get('categories', {
              params: {
                  pageSize: 10,
                  pageNumber: 1,
              },
          });
          setIsLoading(false)
          setCategories(response.data.result);
      } catch (error) {
          console.error("Error fetching categories:", error);
      }
  };
  





  return (
    <CategoryContext.Provider value={{getCategories , categories ,isLoading  , setIsLoading  }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
