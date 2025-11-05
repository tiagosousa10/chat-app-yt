import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto ml-2">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-[#3D4A55] cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
