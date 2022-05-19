import React, { useCallback, useState } from 'react';
import Button from './button';
import Footer from './footer';
import Header from './header';

const UseCallbackExample = () => {
    const [name, setName] = useState("Home Page");
    const [about, setAbout] = useState("About Page");

    const updateNameHandler = useCallback(() => {
        setName('Home Page Updated')
    }, [name]);

    // const updateNameHandler = () => {
    //     setName('Home Page Updated')
    // };

    const updateAboutHandler = useCallback(() => {
        setAbout('About Page Updated')
    }, [about]);

return (
    <div>
        <h1>Use Callback Hook</h1>
        <Header type="home" name={name}></Header>
        <Button clickHandler={updateNameHandler }>Update Home Header</Button>

        <Header type="about" name={about}></Header>
        <Button clickHandler={updateAboutHandler}>Update About Header</Button>

        <Footer></Footer>
    </div>
);
};

export default UseCallbackExample;
