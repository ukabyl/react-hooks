import React from 'react'
import 'materialize-css';
import { Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';

const CardContainer = ({ user }) => {
    return (
        <Card
            header={<CardTitle image={user.avatar_url} waves="light"/>}
            title={user.login}
            >
            <p>
                <Link to={'/profile/' + user.login}>
                    More
                </Link>
            </p>
        </Card>
    )
}

export default CardContainer
