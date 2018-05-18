import React from 'react';

class Repository extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                Repository...<br />
                name: {this.props.name}
                <hr/>
            </div>
        )
    }
}

export default Repository