import './ChangePageButton.css';

const ChangePageButton = ({setCurrentPage, label, changeTo}) => {


    return (
        <a
            className="ChangePageButton"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=>setCurrentPage(changeTo)}
        >
        {label}
        </a>
    )
}

export default ChangePageButton;