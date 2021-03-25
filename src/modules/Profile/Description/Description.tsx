import React from 'react';
import s from './Description.module.css';
import SocialLink from "../../common/SocialLink";
import ProfileStatus from "./ProfileStatus";
import DescriptionAbout from "./DescriptionAbout";
import {useState} from "react";
import DescriptionAboutForm from "./DescriptionAboutForm";
import {IContacts, IProfile} from "../../../interfaces/profile-interfaces";

interface DescriptionProps {
    profileInfo: IProfile
    status: string
    updateUserStatus: (status: string) => void
    saveProfile: (profile: IProfile) => void
    isOwner: boolean
}

const Description: React.FC<DescriptionProps> = ({profileInfo, status, updateUserStatus, saveProfile, isOwner}) => {

    const [isEdit, setIsEdit] = useState(false);
    const contactsLinks = [];

    const onSubmit = (data: any):void => {
        saveProfile(data);
        setIsEdit(false);
    }
    let key: keyof IContacts;
    for (key in profileInfo.contacts) {
        if (profileInfo.contacts[key]) {
            contactsLinks.push(<SocialLink key={key} link={profileInfo.contacts[key]} urlId={key} hoverTitle={key}
                                           width={'35px'} height={'35px'}/>);
        }
    }

    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>{profileInfo.fullName}</h1>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <div className="underline"></div>
            </div>
            <section className={s.links}>
                {contactsLinks}
            </section>
            {isOwner && isEdit ?
                <DescriptionAboutForm onSubmit={onSubmit} /> :
                <DescriptionAbout isOwner={isOwner} activateEditMode={setIsEdit} profileInfo={profileInfo}/>
            }
        </main>
    );
}

export default Description;