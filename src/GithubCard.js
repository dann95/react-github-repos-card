import React from 'react';
import User from './User';
import Repository from './Repository';
import './styles/style.css';

class GithubCard extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            user: '',
            location: '',
            bio: '',
            photo: '',
            repos: [],
            showRepos: false
        }

        this.fetchUserData(props.user)
    }

    handleButtonClick = () => {
        this.setState((prev, props) => {
            return {
                showRepos: ! prev.showRepos
            }
        })
    }

    presentableRepositories = () => {
        return this.sortRepositories(this.filterRepositories())
    }

    sortRepositories = (repos) => {
        return repos.sort((a,b) => b.stargazers_count - a.stargazers_count)
    }

    filterRepositories = () => {
        return this.state.repos.filter((r) => {
            if(! this.props.forks && r.fork)
                return false

            return true
        })
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
            <div className="ghrepos-area">
                <div className="ghrepos">
                    <main>
                        <section style={{backgroundColor: this.props.container.color}}>
                            <div className="content">
                                <User
                                    name={this.state.name}
                                    photo={this.state.photo}
                                    bio={this.state.bio}
                                    location={this.state.location}
                                    icons={this.props.container.icons}
                                    text={this.props.container.text}
                                />
                                    <button onClick={this.handleButtonClick} className={this.state.showRepos ? 'active' : ''} style={{backgroundColor: this.props.button.color, color: this.props.button.textColor}}>
                                        <span>{this.props.button.text}</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <g className="nc-icon-wrapper" fill="#444444">
                                                <path style={{fill: this.props.button.textColor}} d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path>
                                            </g>
                                        </svg>
                                    </button>
                            </div>

                            <div className={'title' + (this.state.showRepos ? ' active' : '')} style={{backgroundColor: this.props.container.strip}}><p>{this.props.button.text}</p></div>
                        </section>


                    </main>

                    <nav className={this.state.showRepos ? 'active' : ''}>
                        {this.presentableRepositories().map((i, _i) => <Repository name={i.name} stargazers={i.stargazers_count} url={i.html_url} key={_i}/>)}
                    </nav>
                </div>
            </div>
        )
    }
}

export default GithubCard