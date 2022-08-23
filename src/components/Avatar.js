import React from "react";
import ImgAvatar from './../img/avatar-img.jpeg'
import './../styles/Avatar.css';

class Avatar extends React.Component {
    render() {
      return (
        <div className="Avatar">
            <img src={ImgAvatar} alt="avatar img"/>
        </div>
      );  
    }
}

export default Avatar;