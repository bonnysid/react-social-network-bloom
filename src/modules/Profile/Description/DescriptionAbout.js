import React from 'react';
import SingleDescription from "./SingleDescription";
import s from "../Posts/Posts.module.css";
import SvgItem from "../../common/SvgItem";

const DescriptionAbout = ({user, activateEditMode}) => {
    return (
        <section>
            <button onClick={() => activateEditMode(true)} className={s.send_button_block}>
                <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
            </button>
            {user.aboutMe && <SingleDescription title={'About'} value={user.aboutMe}/>}
            {user.lookingForAJob && <SingleDescription title={'Looking for a job'} value={user.lookingForAJob ? 'Yes' : 'No'}/>}
            {user.lookingForAJobDescription && <SingleDescription title={'Job description'} value={user.lookingForAJobDescription}/>}
        </section>
    )
}

export default DescriptionAbout;