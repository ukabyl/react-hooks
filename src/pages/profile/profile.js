import React, { useContext, useEffect } from 'react';
import { GithubContext } from '../../context/github/githubContext';
import 'materialize-css';
import { Preloader, Col, Row } from 'react-materialize';
import UserInfo from '../../components/user-info';

const Profile = ({ match }) => {

    const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
    const name = match.params.name;

    useEffect(() => {
        getUser(name);
        getRepos(name)
        // eslint-disable-next-line
    }, [])


    return (
        <div className="container">
            <h1>Profile</h1>
            <Row>
                {
                    loading ? 
                    <Col s={12} className="center-align">
                        <Preloader
                            active
                            color="green"
                            flashing={true}
                            size="small"
                            className="center-align"
                        />
                    </Col> : <UserInfo user={user} repos={repos} />
                }
            </Row>
        </div>
    )
}

export default Profile
