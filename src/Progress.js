import React from "react";
import styled from "styled-components";

import {useSelector} from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);
    let count = 0;

    bucket_list.map((l, idx) => {
        if(l.completed){
            count++;
        }
    })

    return (
        <ProgressBar>
            <HighLight width={(count/bucket_list.length)*100 + "%"}/>
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 40px;
`;

const HighLight = styled.div`
    background: orange;
    height: 40px;
    width: ${props => props.width};
    transition-property: width;
    transition-duration: 4s; 
    transition-delay: 4s;
`;
// transition : 어떤 속성이 변할 때 몇초 동안 변화를 일으킬지 설정. 위에서는 너비를 1초동안 변하게 하겠다는 뜻

export default Progress;