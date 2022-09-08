import './ExamplesPage.css';
import './SharedElements.css';
import LinkButton from './components/LinkButton';

const ExamplesPage = () => {
    return (
        <div className="ExamplesPage">
            <h2>Examples Page coming soon</h2>
            <p>Until then, check out my art on Instagram.</p>
            <br/>
            <LinkButton 
                label="Gallery on Instagram"
                link="https://www.instagram.com/bunniebunbunzzz/?hl=en"
            />
        </div>
    )
}

export default ExamplesPage;