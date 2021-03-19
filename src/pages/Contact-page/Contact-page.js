import style from './Contact-page.module.scss';
import { contactContent } from '../../utils/content.json';
import Form from '../../components/Form/Form';

function ContactPage ( props ) {
    return (
        <>
            <div className={style.contactContainer}>
                <div className={style.linksblock}>
                    <div className={style.codeList}>
                        <h3>Code related profiles</h3>
                        {contactContent.codeNetworks.map(el => <div>
                            <span>{el.name}</span>
                               <img src='imgs/mail.svg'/>
                        </div>)}
                    </div>
                    <div className={style.socialNetworks}>
                        <h3>Social profiles</h3>
                        {contactContent.socialNetworks.map(el => <div>
                            <span>{el.name}</span>
                            <img src='imgs/chrome.svg'/>
                        </div>)}
                    </div>
                </div>
                <Form/>
            </div>
        </>
    );
}

export default ContactPage;
