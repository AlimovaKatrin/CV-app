import style from './Contact-page.module.scss';

import Form from '../../components/Form/Form';

function ContactPage ( props ) {
    return (
        <>
            <div className={style.contactContainer}>
                <div className={style.linksblock}>
                    <div>
                        code related profiles
                    </div>
                    <div>
                        social profiles
                    </div>
                </div>
                <Form/>
            </div>
        </>
    );
}

export default ContactPage;