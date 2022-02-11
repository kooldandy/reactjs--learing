import React from 'react';
const api = 'https://api.github.com/users';

const GetUser = () => {

    const [loading, setLoading] = React.useState(true);
    const [users, setUsers] = React.useState([]);


    const getUsers = async () => {
        try {
            setLoading(false);
            const response = await fetch(api);
            setUsers(await response.json());
        } catch (error) {
            console.log(error);
        }

    }

    React.useEffect(() => {
        getUsers();
    }, []);

    const userView =  users.map((currUser: any) => {
        return <p key={currUser.login}>{currUser.login}</p>
    });

    if(loading) {
        return <h1>Loading....</h1>
    }
    
    return <>
        <h1>Use effects hook</h1>
        { userView }
    </>;
};

export default GetUser;
