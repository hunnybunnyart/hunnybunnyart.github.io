import './LinkButton.css';

const LinkButton = ({link, label}) => {


    return (
        <a
            className="LinkButton"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
        {label}
        </a>
    )
}

export default LinkButton;