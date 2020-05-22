import React, { Fragment, useContext } from 'react';
import Searchbar from '../../components/search-bar';
import Alert from '../../components/alert';
import {Row, Col, Preloader} from 'react-materialize';
import Card from '../../components/card';
import { GithubContext } from '../../context/github/githubContext';

const HomePage = () => {

    const { users, loading } = useContext(GithubContext);


    return (
        <Fragment>
            <Alert />
            <div className="container">
                <Searchbar />
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
                            </Col> :
                        users.map((user) => {
                            return (
                                <Col m={4} s={12} key={user.id}>
                                    <Card user={user} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        </Fragment>
    )
}

export default HomePage;
