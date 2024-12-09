import React from 'react'

export default function Feed({FeedList}) {
  return (
    <div className="feedList">
      {FeedList.map((value, index) => {
        return (
          <div className="feed">
            <h2 className="feed_id" id={value.feed_id}>
              {value.tweet}
            </h2>
            <p className="postedby" id={value.poster_id}>
              Posted By - {value.poster_name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
