import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6Ziuwq9_qQ8fvpNMrqk4BQbcIsPPeMPn3y_Mv8sE03J9PaTg4&usqp=CAU" alt='logo ua'/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
