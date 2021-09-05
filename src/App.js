import React from "react";
import logo from "./logo.svg";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.text = React.createRef();
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  }

  componentDidMount(){
    this.props.load();
  }

  render() {
    return (
      <div className="App">
        {!this.props.is_loaded? (<Spinner/>) : (
          <React.Fragment>
            <Container>
              <Title >내 버킷리스트</Title>
              <Progress/>
              <Line/>
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
                <Route path="/detail/:index/:completed" component={Detail}/>
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
  min-height: 1vh;
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