import React, { useReducer } from 'react';

const initialState = {
    name:{
        value:'',
        error:null
    },
    email:{
        value:'',
        error:null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: {
            value:action.payload,
            error:action.error
        },
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        let error = null
        if(name=="name"){
            if(value.length==0){
                error = null
            }else if(value.length<3){
                error="Name must be at least 3"
            }
        }
        if(name=="email"){
            if(value.length==0){
                error = null
            }else if(value.length<5){
                error="Email must be at least 5"
            }
        }
        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name.value}
                        onChange={handleChange}
                    />
                    {state.name.error !==null &&(
                        <p>{state.name.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                    {state.email.error !==null &&(
                        <p>{state.email.error}</p>
                    )}
                </label>
            </div>
        </div>
    );
}