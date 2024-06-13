import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLyout() {

  return (
    <div>
      <Header />
      <div className="content"> <Outlet /></div>
    </div>
  );
}
