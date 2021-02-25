import style from './Nav-bar.module.scss';

function NavBar( props ) {
    return (
      <div className={style.navContainer}>
          <div className={style.navElement}>
              Btm
          </div>
          <div className={style.navElement}>
              BUTTON
          </div>
          <div className={style.navElement}>
              KNOPKA
          </div>
      </div>
    );
}

export default NavBar;
