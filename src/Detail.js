import React from "react";

import Button from "@material-ui/core/Button";
//import {Button} from "@material-ui/core"; 머테리얼 ui 가져오는 방법 두가지 있다.
import ButtonGroup from "@material-ui/core/ButtonGroup";

import {useSelector, useDispatch} from "react-redux";
import {deleteBucketFB, updateBucketFB} from "./redux/modules/bucket";

const Detail = (props) => {
    const dispatch = useDispatch();

    const bucket_list = useSelector((state)=>state.bucket.list);
    console.log(bucket_list, props);
    let bucket_index = parseInt(props.match.params.index);
    let color = props.match.params.color;

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}({color=='aliceblue'?"미완료":"완료"})</h1>
            <ButtonGroup>
                <Button 
                    //style={{color: "red"}}
                    color="secondary"
                    onClick={()=>{
                    dispatch(deleteBucketFB(bucket_index));
                    props.history.goBack();
                }}>
                삭제하기
                </Button>
                <Button 
                    color="primary"
                    onClick={()=>{
                    dispatch(updateBucketFB(bucket_index));
                    props.history.goBack();
                }}>
                완료하기
                </Button>
                <Button 
                    onClick={()=>{
                    props.history.goBack();
                }}>
                    목록
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Detail;