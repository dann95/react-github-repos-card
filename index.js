import GithubCard from './src/GithubCard';
import ReactDOM from 'react-dom';

export default function (el, user) {
    ReactDOM.render(
        <GithubCard user={user} />,
        el
    )
}