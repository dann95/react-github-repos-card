import React from 'react';

class Repository extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a href={this.props.url} target={'_blank'}>
                <div className="content">
                    <h1>{this.props.name}</h1>
                    <span>stargazers: {this.props.stargazers}</span>
                </div>
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                     viewBox="0 0 48 48">
                    <g className="nc-icon-wrapper" fill="#444444">
                        <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>
                    </g>
                </svg>
            </a>
        )
    }
}

export default Repository