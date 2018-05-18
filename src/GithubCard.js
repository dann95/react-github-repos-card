import React from 'react';
import User from './User';
import Repository from './Repository';

class GithubCard extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            user: '',
            location: '',
            bio: '',
            photo: '',
            repos: []
        }

        this.fetchUserData(props.user)
    }

    async fetchUserData(ghuser) {

        var [user, repos] = await Promise.all([
            fetch(`https://api.github.com/users/${ghuser}`).then((response) => response.json()),
            fetch(`https://api.github.com/users/${ghuser}/repos`).then((response) => response.json())
        ])

        this.setState((prev,props) => {
            return {
                user: user.login,
                name: user.name,
                bio: user.bio,
                photo: user.avatar_url,
                location: user.location,
                repos: repos
            }
        })
    }

    render() {
        return (
            <div>
                <h1>GithubCard</h1>
                <User name={this.state.name} bio={this.state.bio} photo={this.state.photo} user={this.state.user} location={this.state.location} />
                <hr />
                {this.state.repos.map((i => <Repository name={i.name} />))}
            </div>
        )
    }
}

export default GithubCard