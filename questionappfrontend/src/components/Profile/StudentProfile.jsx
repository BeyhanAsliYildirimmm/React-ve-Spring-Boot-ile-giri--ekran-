import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Typography} from "@material-ui/core";
import React from "react";
import CustomTimeline, {CustomTimelineSeparator} from "../Timeline/Timeline";
import resumeData from "../resumeData";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";  
import "./Profile.css"
import CustomButton from "../Buttons/UpdateButton";
import AutorenewIcon from '@mui/icons-material/Autorenew';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
      <CustomTimelineSeparator />
     <TimelineContent className="timeline_content"> 
      {link ? (
        <Typography  className="timelineItem_text">
          <span>{title}:</span> {" "}
          <a href={link} target="_blank">
          {text}
          </a>
        </Typography>
      ) : (
        <Typography  className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )
    }
     </TimelineContent>
    </TimelineItem>
  );

const StudentProfile = () =>{
    return(
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>

            </div>
            <figure className="profile_image">
                <img src={require("../../../src/assets/images/resim.jpg")} alt=' ' />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<AccountCircleIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Title' text={resumeData.title} />
                    <CustomTimelineItem title='Email' text={resumeData.email} />
                    <CustomTimelineItem title='Birthday' text={resumeData.birthday} />
                
                    {Object.keys(resumeData.socials).map((key)=>(
                        <CustomTimelineItem
                         title={key} 
                         text={resumeData.socials[key].text} 
                         link={resumeData.socials[key].link} />
                    ))}
                </CustomTimeline>
                <div className='button_container'>
                <CustomButton text={'Güncelle'} icon={<AutorenewIcon />}/>

                </div>
            </div>
        </div>
    )
}
export default StudentProfile;