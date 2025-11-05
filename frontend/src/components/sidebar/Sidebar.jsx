import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div
      className="border-r p-5 flex flex-col h-full"
      style={{ borderColor: "#bec6c3" }}
    >
      <SearchInput />
      <div className="h-px my-3" style={{ backgroundColor: "#bec6c3" }}></div>
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
