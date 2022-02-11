import React, { useRef } from 'react';

const UnControlled = () => {

    const name: any = useRef('');

    const submitForm = (event: any) => {
        event.preventDefault();
        console.log(name.current.value);


    }

    return <div>
        <h1> React UnControlled Forms</h1>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor='name'>Enter Name: </label>
                <input type="text" id="name" ref={name} />
            </div>

            <div>
                <input type="submit" value="Enter"/>
            </div>

        </form>
    </div>;
}

export default UnControlled;
