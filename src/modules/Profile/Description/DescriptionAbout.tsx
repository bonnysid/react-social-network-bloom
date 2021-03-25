import React from 'react';
import SingleDescription from "./SingleDescription";
import s from "../Posts/Posts.module.css";
import SvgItem from "../../common/SvgItem";
import {IProfile} from "../../../interfaces/profile-interfaces";

interface AboutProps {
    profileInfo: IProfile,
    activateEditMode: (flag: boolean) => void,
    isOwner: boolean
}

const DescriptionAbout: React.FC<AboutProps> = ({profileInfo, activateEditMode, isOwner}) => {
    return (
        <section>
            {isOwner && <button onClick={() => activateEditMode(true)} className={s.send_button_block}>
                <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'settings'}/>
            </button>}
            {profileInfo.aboutMe && <SingleDescription title={'About'} value={profileInfo.aboutMe}/>}
            {profileInfo.lookingForAJob && <SingleDescription title={'Looking for a job'} value={profileInfo.lookingForAJob ? 'Yes' : 'No'}/>}
            {profileInfo.lookingForAJobDescription && <SingleDescription title={'Job description'} value={profileInfo.lookingForAJobDescription}/>}
        </section>
    )
}

export default DescriptionAbout;