import GithubCard from './src/GithubCard';
import ReactDOM from 'react-dom';
import defaultSettings from './src/settings';
import merge from 'mergify';

export default function (el, user, o = {}) {
    let options = merge(defaultSettings, o)
    ReactDOM.render(
        <GithubCard
            user={user}
            forks={options.forks}
            button={options.button}
            container={options.container}
        />,
        el
    )
}