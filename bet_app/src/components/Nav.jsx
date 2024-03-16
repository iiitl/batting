import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

const Nav = ({ username }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("phone");
    navigate("/");
  };
  const CreateBet = () => {
    navigate("/createBet");
  };
  return (
    <div className=" w-full py-4  text-black flex flex-col px-3 bg-blue-200 dark:bg-gray-700 dark:text-white">
      <div className="flex w-full justify-between  items-center">
        <span className="flex  flex-col items-start">
          <button
            className=" font-bold  mr-2 "
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </button>
          <span className=" text-md font-bold">
            Welcome,{username}
          </span>
        </span>
        <span>
          <ThemeBtn/>
          <button
            className="bg-purple-800 text-white  text-sm px-1 py-1 font-bold rounded-md  mx-2"
            onClick={() => {
              CreateBet();
            }}
          >
            Create Bet
          </button>
          <button
            className="bg-red-600 text-white text-sm px-1  py-1 font-bold rounded-md"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </span>
      </div>
    </div>
  );
};

export default Nav;
