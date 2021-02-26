import Card from '../Card/Card';
import style from './List.module.scss';

const List = ( { list } ) => {

    return (
      <>
          <div className={style.container}>
              {list.map((el,i) => <Card elem={el} index={i}/>)}
          </div>
      </>
    );
};

export default List;
