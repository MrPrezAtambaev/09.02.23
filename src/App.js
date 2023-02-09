import React from "react";
import Header from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

const App = () => {
  const users = [
    {
      name: "Akyl",
      lastName: "MrPrezAtambaev",
      age: 19,
      id: 1,
    },
    {
      name: "Zamir",
      lastName: "MeetUp",
      age: 27,
      id: 2,
    },
    {
      name: "Urmat",
      lastName: "ProductManager",
      age: 26,
      id: 3,
    },
    {
      name: "Isken",
      lastName: "Almazov",
      age: 21,
      id: 4,
    },
  ];

  return (
    <>
      <Header />
      <Section users={users} />
      <Footer />
    </>
  );
};

export default App;
