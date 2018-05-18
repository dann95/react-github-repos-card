import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                Name: {this.props.name} <br/>
                Bio: {this.props.bio} <br />
                Location: {this.props.location} <br />
                Photo: <img src={this.props.photo}/> <br />
                Repos: {JSON.stringify(this.props.repos)}
            </div>
        )
    }
}

export default User