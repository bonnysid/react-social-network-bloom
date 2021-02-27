import React from 'react';
import s from './Description.module.css';
import SocialLink from "../../common/SocialLink";
import ProfileStatus from "./ProfileStatus";
import SingleDescription from "./SingleDescription";

const Description = ({user, status, about, updateUserStatus}) => {

    const contactsLinks = [];

    for(let key in user.contacts) {
        if (user.contacts[key]) {
            contactsLinks.push(<SocialLink key={key} link={user.contacts[key]} urlId={key} hoverTitle={key} width={'35px'} height={'35px'}/>);
        }
    }

    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>{user.fullName}</h1>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <div className="underline"></div>
            </div>
            <section className={s.links}>
                {contactsLinks}
            </section>
            <section className={s.profileInfo}>
                {user.aboutMe && <SingleDescription title={'About'} value={user.aboutMe}/>}
                {user.lookingForAJob && <SingleDescription title={'Looking for a job'} value={user.lookingForAJob ? 'Yes' : 'No'}/>}
                {user.lookingForAJobDescription && <SingleDescription title={'Job description'} value={user.lookingForAJobDescription}/>}
            </section>

        </main>
    );
}

export default Description;