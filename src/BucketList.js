// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";

const BucketList = (props) => {
  console.log(props);
  //const my_lists = props.list;

  const bucket_list = useSelector(state => state.bucket.list);
  console.log(bucket_list)

  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle 
            key={index} 
            color={list.completed? "orange":"aliceblue"}
            onClick={() => {props.history.push('/detail/'+index+'/aliceblue');}}>
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  `;
  
  const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${props => props.color};
  cursor:pointer;
`;

export default BucketList;