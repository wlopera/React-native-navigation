import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

// console.log("FavoritesContext:", FavoritesContext);

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  const addFavorites = (id) => {
    setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorites = (id) => {
    setFavoritesMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorites,
    removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
