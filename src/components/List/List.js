import Card from '../Card/Card';
import style from './List.module.scss';

const List = ( { list } ) => {

    return (
        <>
            <div className={style.container}>
                {/*array indexes acceptable if they are stable, in this case i am sure about that*/}
                {list.map(( el, i ) => <Card key={i} elem={el}/>)}
            </div>
        </>
    );
};

export default List;
