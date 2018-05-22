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
                <aside style={{color: this.props.text}}>
                    <h1>{this.props.name}</h1>
                    <p><svg xmlns="http://www.w3.org/2000/svg" style={{fill: this.props.icons}} width="14" height="14" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>{this.props.location}</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" style={{fill: this.props.icons}} width="14" height="14" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>{this.props.bio}</p>
                </aside>
            </div>
        )
    }
}

export default User