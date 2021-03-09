import style from './Contact-page.module.scss';

import Form from '../../components/Form/Form';

function ContactPage ( props ) {
    return (
        <>
            <div className={style.contactContainer}>
               <Form/>
                <div className={style.linksblock}>
                    <div>
                        code related profiles
                    </div>
                    <div>
                        social profiles
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;