import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function User() {
    const { userId, userName, globalRefresh, triggerGlobalRefresh } =
      useContext(UserContext);
  return (
    <React.Fragment className="userComponent">
      <p>userName: {userName}</p>
    </React.Fragment>
  );
}
