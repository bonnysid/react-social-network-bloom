import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "../../pages/Profile/Description/ProfileStatus";

describe('ProfileStatus component', () =>{
    test('after creation <span> should be displayed', () => {
        let component = create(<ProfileStatus status={'hello'}></ProfileStatus>);

        const instance = component.getInstance();
        const span = instance.findByType('span')

        expect(span.length).toBe(1)

    })
})
