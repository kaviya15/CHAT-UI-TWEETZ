

import React from "react";

export default function Followers({ FollowersList }) {
  return (
    <>
      {
        FollowersList.map((value,index)=>{
            return (
              <>
                {" "}
                <div className="followers" id="followers-list">
                  <div className="followername">{value}</div>
                  <button className="followers-list-button">
                    {" "}
                    - un follow{" "}
                  </button>
                </div>{" "}
                {index != FollowersList.length - 1 ? (
                  <div className="separator"></div>
                ) : (
                  <></>
                )}
              </>
            );
        }
        )
    }
    </>
  );
}

