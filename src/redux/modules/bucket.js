// bucket.js
import {firestore} from "../../firebase";

const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const UPDATE_CANCEL = "bucket/UPDATE_CANCEL";
const DELETE = "bucket/DELETE";

const LOADED = "bucket/LOADED";

// InitialState
const InitialState = {
    list: [
        { text: "영화관 가기", completed: false },
        { text: "매일 책읽기", completed: false },
        { text: "수영 배우기", completed: false },
    ],
    is_loaded: false,
}

// Action Creators
export const loadBucket = (bucket) => {
    return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket};
}

export const updateBucket = (bucket, isComplete) => {
    if(isComplete === "false"){
        return {type: UPDATE, bucket};
    }else{
        return {type: UPDATE_CANCEL, bucket};
    }
}

export const isLoaded = (loaded) => {
    return {type: LOADED, loaded};
}

export const deleteBucket = (bucket) => {
    return {type: DELETE, bucket};
}

//
export const loadBucketFB = () => {
    return function (dispatch) {

        bucket_db.get().then((docs) => {
            let bucket_data = [];
            
            docs.forEach((doc) => {
                if(doc.exists) {
                    bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
                }
            })

            dispatch(loadBucket(bucket_data));
        });
    };
}

export const addBucketFB = (bucket) => {
    return function (dispatch) {
        let bucket_data = {text:bucket, completed: false};
        console.log('여기',bucket_data)

        dispatch(isLoaded(false));

        bucket_db.add(bucket_data).then(docRef => {
            bucket_data = {...bucket_data, id: docRef.id};
            console.log('zz',bucket_data)
            dispatch(createBucket(bucket_data));
            dispatch(isLoaded(true));
        })
    }
}

export const updateBucketFB = (bucket, isComplete) => { // 파라미터 bucket은 index라고 해도 됨
    return function (dispatch, getState) {
        const old_bucket_data = getState().bucket.list[bucket];
        console.log(old_bucket_data);
        let bucket_data; 
        if(isComplete === "false"){
            bucket_data = {...old_bucket_data, completed: true}; 
        }else{
            bucket_data = {...old_bucket_data, completed: false}; 
        }
        // ↑ 원래는 전체 내용이 아닌 completed만 넘겨줘도 된다. 실습을 위해 전체 내용 담긴 변수 넘긴것

        if(!bucket_data.id){
            return;
        }
        dispatch(isLoaded(false));

        bucket_db.doc(bucket_data.id).update(bucket_data).then(docRef => { // docRef는 리스폰스 줄여서 res라고 해도됨
            dispatch(updateBucket(bucket, isComplete));
            dispatch(isLoaded(true));
        }).catch(error => {
            console.log(error);
        });
    }
}

export const deleteBucketFB = (bucket) => { // 파라미터 bucket은 index라고 해도 됨
    return function (dispatch, getState) {
        const old_bucket_data = getState().bucket.list[bucket];

        if(!old_bucket_data.id){
            return;
        }
        dispatch(isLoaded(false));

        bucket_db.doc(old_bucket_data.id).delete().then(docRef => {
            dispatch(deleteBucket(bucket));
            dispatch(isLoaded(true));
        }).catch(error => { 
            // delete 요청이 실패했으면(삭제가 안됬으면) then이 아니라 catch로 빠짐
            // 혹은 then 안에서 고의적으로 에러를 내도 catch로 빠진다. 편하다.
            console.log(error) 
        })
    }
}

// Reducer
export default function reducer(state = InitialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
        if(action.bucket.length > 0){
            console.log(action.bucket)
            return {list: action.bucket, is_loaded : true};
        }
        console.log(state)
        return state;
    }

    case "bucket/CREATE": {
        const new_bucket_list = [...state.list, action.bucket];
        console.log(new_bucket_list)
        return {list: new_bucket_list};
    }
    
    case "bucket/UPDATE": {
        const bucket_list = state.list.map((l, idx) => {
            if(idx === action.bucket) {
                return {...l, completed: true};
            } else{
                return l;
            }
        });
        return {list: bucket_list};
    }
    
    case "bucket/UPDATE_CANCEL": {
        const bucket_list = state.list.map((l, idx) => {
            if(idx === action.bucket) {
                return {...l, completed: false};
            } else{
                return l;
            }
        });
        return {list: bucket_list};
    }

    case "bucket/DELETE": {
        const bucket_list = state.list.filter((l, idx) => {
            if(idx !== action.bucket){
                return l;
            }
          });
          return {list: bucket_list};
    }
        
    case "bucket/LOADED": {
        return {...state, is_loaded: action.loaded};
    }

    default: return state;
  }
}



