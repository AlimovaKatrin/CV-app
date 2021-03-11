import style from './Form.module.scss';

function Form ( props ) {
    return (
        <form className={style.contactForm}>
            <input className={style.field}/>
            <textarea className={style.field}/>
            <button type='submit'>Send</button>
        </form>
    );
}

export default Form;