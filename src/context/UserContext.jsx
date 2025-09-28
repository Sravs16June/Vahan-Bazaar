import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "Guest", favorites: [] });

  const addFavorite = (vehicleId) => {
    setUser((prev) => ({ ...prev, favorites: [...prev.favorites, vehicleId] }));
  };

  const removeFavorite = (vehicleId) => {
    setUser((prev) => ({
      ...prev,
      favorites: prev.favorites.filter((id) => id !== vehicleId),
    }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, addFavorite, removeFavorite }}>
      {children}
    </UserContext.Provider>
  );
};
