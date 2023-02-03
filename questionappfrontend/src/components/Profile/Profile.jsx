import React from "react";
import {Typography} from "@material-ui/core";
import "./Profile.css"
import CostomTimeline from "../Timeline/Timeline";
const Profile = () =>{
    return(
      <div className="profile container_shadow">
        <div className="profile_name">
            <Typography className="name">Sam</Typography>
            <Typography className="Title">Sam</Typography>
        </div>
        <figure className="profile_image">
            <img className="img" src="/resim.jpg" alt="" />
        </figure>
        <div className="profile_information">
           <CostomTimeline />
            <br/>
            <button>my button</button>
        </div>
      </div>
    )
}
export default Profile;