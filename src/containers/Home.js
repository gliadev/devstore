import React from "react";
import "../assets/css/Home.css";
import Item from "../components/Item";

export default function Home() {
  return (
    <>
      <div className="container">
        <div classNameName="wraper">
          <div className="home">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </div>
    </>
  );
}
