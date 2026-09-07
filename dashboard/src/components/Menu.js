import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
// import { handleProfileClick } from "../utils/someFile";
async function sendUserName(){
  try{
    let data =  await axios.get("http://localhost:3000/getuserName",{withCredentials: true});
    return data.data.toString();
  }
  catch (error) {
        if (error.response?.status === 401) {
            window.location.href = "http://localhost:5173/signup";
        }
        throw error;
    }
}
const Menu = () => {
 let [username,setusername] = useState("Demo");
  async function fetchUser(){
    try{
    let data =  await axios.get("http://localhost:3000/getuserName",{withCredentials: true});
    setusername(()=>{
      return data.data.toString();
    })
  }
  catch (error) {
        if (error.response?.status === 401) {
            window.location.href = "http://localhost:5173/signup";
        }
        throw error;
    }
}

  useEffect(()=>{
    fetchUser();
  },[]);
 
  let [selectedMenue, setselectedMenue] = useState(1);
  function handleClickMenue(e, a) {
    setselectedMenue((selectedMenue) => {
      return a;
    });
  }
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li data-value={1} onClick={(e) => handleClickMenue(e, 1)}>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: selectedMenue === 1 ? "rgb(14, 111, 201)" : "black",
              }}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li
            value={1}
            onClick={(e) => {
              handleClickMenue(e, 2);
            }}
          >
            <Link
              to={"/orders"}
              style={{
                textDecoration: "none",
                color: selectedMenue === 2 ? "rgb(14, 111, 201)" : "black",
              }}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li
            value={3}
            onClick={(e) => {
              handleClickMenue(e, 3);
            }}
          >
            <Link
              to={"/holdings"}
              style={{
                textDecoration: "none",
                color: selectedMenue === 3 ? "rgb(14, 111, 201)" : "black",
              }}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li
            value={4}
            onClick={(e) => {
              handleClickMenue(e, 4);
            }}
          >
            <Link
              to={"positions"}
              style={{
                textDecoration: "none",
                color: selectedMenue === 4 ? "rgb(14, 111, 201)" : "black",
              }}
            >
              <p>Positions</p>
            </Link>
          </li>
          <li
            value={5}
            onClick={(e) => {
              handleClickMenue(e, 5);
            }}
          >
            <Link
              to={"funds"}
              style={{
                textDecoration: "none",
                color: selectedMenue === 5 ? "rgb(14, 111, 201)" : "black",
              }}
            >
              <p>Funds</p>
            </Link>
          </li>
          <li
            value={6}
            onClick={(e) => {
              handleClickMenue(e, 6);
            }}
          >
            <Link
              to={"apps"}
              style={{
                textDecoration: "none",
                color: selectedMenue === 6 ? "rgb(14, 111, 201)" : "black",
              }}
            >
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        {false ? (
          <>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </>
        ) : (
        <>
       <i class="fa-regular fa-user"></i>
          &nbsp;
          <p>{username}</p> </>
        )}
      </div>
    </div>
  );
};

export {sendUserName,Menu};
