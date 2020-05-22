import React from 'react';
import 'materialize-css';
import { Badge, Table } from 'react-materialize';

const UserInfo = ({ user, repos }) => (
    <div className="card" style={{ padding: '50px 20px', margin: '2rem 0' }}>
        <div className="card-body">
            <div className="row">
                <div className="col s6 center-align">
                    <img style={{ maxWidth: '300px', width: '100%' }} src={user.avatar_url} alt={user.name} />
                    <h2>{ user.name }</h2>
                    { user.location && <p>Location: { user.location }</p> }
                </div>
                <div className="col s6">
                    { user.bio && <> <h3>BIO: </h3> <p>{ user.bio }</p></> }
                    <a 
                        href={user.html_url}
                        rel="noopener noreferrer"
                        target="_blank" 
                        className="btn btn-dark">Open Profile</a>
                    <ul>
                        { user.login && <li> <strong>Username:</strong> { user.login }</li> }
{                        user.blog && <li> <strong>Website:</strong> <a href={ user.blog } rel="noopener noreferrer" target="_blank">{ user.blog }</a></li> }
                        { user.company && <li> <strong>Company:</strong> { user.company }</li> }
                    </ul>
                    <Badge
                        className="deep-orange darken-2"
                        style={{color: '#fff'}}
                        >
                         Followers: { user.followers }
                    </Badge>
                    <Badge
                        className="brown darken-3"
                        style={{color: '#fff'}}
                        >
                         Following: { user.following }
                    </Badge>
                    <Badge
                        className="blue-grey darken-2"
                        style={{color: '#fff'}}
                        >
                         Repositories: { user.public_repos }
                    </Badge>
                    <Badge
                        className="amber darken-4"
                        style={{color: '#fff'}}
                        >
                         Gists: { user.public_gists }
                    </Badge>
                </div>
            </div>
        </div>
        <h3>Repositories</h3>
        <Table>
            <thead>
                <tr>
                <th data-field="id">
                    Name
                </th>
                <th data-field="name">
                    Description
                </th>
                <th data-field="price">
                    Link to the repository
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    repos.map((repo) => {
                        return (
                            <tr key={repo.id}>
                                <td>
                                    { repo.name }
                                </td>
                                <td>
                                    { repo.description ? repo.description : 'no description' }
                                </td>
                                <td>
                                    {
                                        repo.html_url && <a
                                            rel="noopener noreferrer"
                                            target="_blank" 
                                            href={ repo.html_url }>
                                                { repo.html_url }
                                        </a>
                                    }
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    </div>
);  


export default UserInfo;