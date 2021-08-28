import React from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";

import {withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";

import Spinner from "./Spinner";

import {connect} from "react-redux";
import {loadBucket, createBucket, loadBucketFB, addBucketFB} from "./redux/modules/bucket";

import { firestore } from "./firebase";

const mapStateToProps = (state) => {
 return {
   bucket_list: state.bucket.list,
   is_loaded: state.bucket.is_loaded
  }; 
}
// 함수 선언하는 방법 두가지. mapStateToProps도 있고 mapDispatchToProps도 있다.
const mapDispatchToProps = (dispatch) => ({
    load: () => {
      dispatch(loadBucketFB());
    },
    create: (bucket) => {
      dispatch(addBucketFB(bucket));
    }
})

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
    };

    this.text = React.createRef();
  }

  addBucketList = () => {
    //let list = this.state.list;
    const new_item = this.text.current.value;
    this.props.create(new_item);
    //this.setState({list: [...list, new_item]});
  }

  componentDidMount(){
    this.props.load();
    
    //console.log(this.props);
    //const bucket = firestore.collection("buckets");

    //bucket.doc("bucket_item").set({text:"수영 배우기", completed:false});

    // bucket.doc("bucket_item2").get().then((doc) => {
    //   if(doc.exists) {
    //     console.log(doc);
    //     console.log(doc.data());
    //     console.log(doc.id);
    //   }
    //   console.log(doc.exists);
    // });

    // bucket.get().then(docs => {
    //   let bucket_data = [];
      
    //   docs.forEach((doc)=> {
    //     if(doc.exists){
    //       bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
    //     }
    //   });

    //   console.log(bucket_data);
    // });
    // bucket.add({text:"캘리그라피 배우기", completed: false}).then((docRef)=>{
    //   console.log(docRef);
    //   console.log(docRef.id);
    // })
    
    //bucket.doc("bucket_item1").update({text:"수영 배우기2"});

    // bucket.doc("hwjtFsca8cI2tR4C86Ji").delete().then(docRef =>{
    //   console.log('지웠어요!');
    // })
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        {!this.props.is_loaded? (<Spinner/>) : (
          <React.Fragment>
            <Container>
              <Title >내 버킷리스트</Title>
              <Progress/>
              <Line/>
              {/* 컴포넌트를 넣어줍니다. */}
              {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
              <Switch>
                <Route 
                  path="/" 
                  exact 
                  render={(props) =>
                    <BucketList 
                      history={this.props.history} 
                      list={this.props.bucket_list} 
                    />
                  }
                />
                <Route path="/detail/:index/:color" component={Detail}/>
                <Route render={(props) => (<NotFound history={props.history}/>)}/>
              </Switch>
            </Container>

            <Input>
              <input type="text" ref={this.text} style={{marginRight:'7px'}}/>
              <button onClick={this.addBucketList} style={{cursor:'pointer'}}>추가하기</button>
            </Input>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));