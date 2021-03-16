import style from './Contact-page.module.scss';
import { contactContent } from '../../utils/content.json';
import Form from '../../components/Form/Form';

function ContactPage ( props ) {
    return (
        <>
            <div className={style.contactContainer}>
                <div className={style.linksblock}>
                    <div>
                        code related profiles
                        {contactContent.codeNetworks.map(el=><span>
                            {el.name}
                        </span>)}
                    </div>
                    <div>
                        social profiles
                        {contactContent.socialNetworks.map(el=><span>
                            {el.name}
                        </span>)}
                    </div>
                </div>
                <Form/>
            </div>
        </>
    );
}

export default ContactPage;
