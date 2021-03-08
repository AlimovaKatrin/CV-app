import Card from '../ProjectCard/Card';
import style from './List.module.scss';

const List = ( { list } ) => {

    return (
        <>
            <div className={style.container}>
                {list.map(( el, i ) => <Card key={i} elem={el}/>)}
            </div>
        </>
    );
};

export default List;
