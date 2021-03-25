import React from 'react';
import s from './Description.module.css';
import SocialLink from "../../common/SocialLink";
import ProfileStatus from "./ProfileStatus";
import DescriptionAbout from "./DescriptionAbout";
import {useState} from "react";
import DescriptionAboutForm from "./DescriptionAboutForm";
import {IProfile} from "../../../interfaces/profile-interfaces";

interface DescriptionProps {
    user: IProfile
    status: string
    updateUserStatus: (status: string) => void
    saveProfile: (profile: IProfile) => void
    isOwner: boolean
}

const Description: React.FC<DescriptionProps> = ({user, status, updateUserStatus, saveProfile, isOwner}) => {

    const [isEdit, setIsEdit] = useState(false);
    const contactsLinks = [];

    const onSubmit = (data: IProfile):void => {
        saveProfile(data);
        setIsEdit(false);
    }

    for (let key in user.contacts) {
        if (user.contacts[key]) {
            contactsLinks.push(<SocialLink key={key} link={user.contacts[key]} urlId={key} hoverTitle={key}
                                           width={'35px'} height={'35px'}/>);
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
            {isOwner && isEdit ?
                <DescriptionAboutForm onSubmit={onSubmit} savePhoto={saveProfile}/> :
                <DescriptionAbout isOwner={isOwner} activateEditMode={setIsEdit} user={user}/>
            }
        </main>
    );
}

export default Description;