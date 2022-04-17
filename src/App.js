import React from "react";
import CardList from "./components/gallery/CardList";
import PhotoList from "./components/gallery/PhotoList";
import { AuthProvider } from "./contexts/authContext";
import { GalleryProvider } from "./contexts/galleryContext";
import HeaderMain from "./HeaderMain";

// Context
// App(status:false) -> Header -> Menu -> User -> Profile
// Props Drilling
// App (status: false) => Profile: Context
const App = () => {
  return (
    <>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CardList></CardList>
        </GalleryProvider>
      </AuthProvider>
    </>
  );
};

export default App;
