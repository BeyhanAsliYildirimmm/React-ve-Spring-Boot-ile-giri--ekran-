import React from "react";
import {Typography} from "@material-ui/core";
import "./Profile.css"
import CustomTimeline,{CustomerTimelineSeparator} from "../Timeline/Timeline";
import resumeData from "../resumeData";
import PersonIcon from '@mui/icons-material/Person';
import { TimelineContent, TimelineItem } from "@material-ui/lab";


const CustomTimelineItem = ({title, text, link}) => (
  <TimelineItem>
    <CustomerTimelineSeparator />
   <TimelineContent className="timeline_content"> 
    {link ? (
      <Typography  className="timelineItem_text">
        <span>{title}:</span> {" "}
        <a href={link} target="_blank">
          {link}
        </a>
      </Typography>
    ) : (
      <Typography  className="timelineItem_terxt">
        <span>{title}:</span> {text}
      </Typography>
    )
  }
   </TimelineContent>
  </TimelineItem>
);

const Profile = () =>{
    return(
      <div className="full_profile">
        <div className="profile ">
          <div className="profile_name">
              <Typography className="name">{resumeData.name}</Typography>
              <Typography className="Title">{resumeData.title}</Typography>
          </div>
          <figure className="profile_image">
              <img className="img" src="/resim.jpg" alt="" />
          </figure>
          <div className="profile_information">
           
            <CustomTimeline icon={<PersonIcon />} >
              <CustomTimelineItem title='İsim' text={resumeData.name} />
              <CustomTimelineItem title='Title' text={resumeData.title} />
              <CustomTimelineItem title='e-posta' text={resumeData.email} />
              
             {Object.keys(resumeData.socials).map(key => (
                <CustomTimelineItem title={key}  text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
            
             ))}

            </CustomTimeline>
              <br/>
              <button className="button">my button</button>
          </div>
      </div>
    </div>
    )
}
export default Profile;