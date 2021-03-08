import style from './Contact-page.module.scss';

function ContactPage ( props ) {
    return (
        <>
            <div className={style.contactContainer}>
                <form>
                    <input/>
                    <input/>
                    <button>Send</button>
                </form>

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