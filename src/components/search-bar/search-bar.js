import React, { useContext, useState } from 'react';
import 'materialize-css';
import { TextInput } from 'react-materialize';
import { AlertContext } from '../../context/alert/alertContext';
import { GithubContext } from '../../context/github/githubContext';

const Searchbar = () => {

    const [value, setValue] = useState('');

    const alertContext = useContext(AlertContext);
    const githubContext = useContext(GithubContext);

    function keyPressHandler(e) {
        if ( e.key !== 'Enter' ) {
            return;
        } 

        if(!value.trim()) {
            alertContext.show('Please type user\'s name');
        } else {
            githubContext.searchUsers(value.trim());
            alertContext.hide();
        }
    }

    return (
        <TextInput
            label="Find user"
            onKeyPress={keyPressHandler}
            onChange={(e) => setValue(e.target.value)}
            value={value}
        />
    )
}

export default Searchbar
