import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className=" w-full py-4  text-black flex flex-col px-3 gap-2">
      <div className="flex w-full justify-between  items-center gap-2">
        <span className="flex flex-col items-start">
          <button
            className="font-bold  text-sm md:text-base mr-2 "
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </button>
          <span className="  text-sm md:text-base font-bold capitalize">
            Welcome,{username}
          </span>
        </span>

        <div className="flex flex-wrap justify-end items-end gap-2">
          <button
            className="bg-purple-800 text-white  text-sm md:text-base px-1 py-1 font-bold rounded-md"
            onClick={() => {
              CreateBet();
            }}
          >
            Create Bet
          </button>
          <button
            className="bg-red-600 text-white  text-sm md:text-base px-1  py-1 font-bold rounded-md"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;