import React from "react";
import { AuthProvider } from "./contexts/authContext";
import HeaderMain from "./HeaderMain";

// Context
// App(status:false) -> Header -> Menu -> User -> Profile
// Props Drilling
// App (status: false) => Profile: Context
const App = () => {
  return (
    <>
      <AuthProvider>
        <HeaderMain></HeaderMain>
      </AuthProvider>
    </>
  );
};

export default App;
