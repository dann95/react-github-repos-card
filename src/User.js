import React from 'react';

class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <img src={this.props.photo} />
                <aside>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.location}</p>
                    <p>{this.props.bio}</p>
                </aside>
            </div>
        )
    }
}

export default User