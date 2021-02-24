import style from './Nav-bar.module.scss';

function NavBar( props ) {
    return (
      <nav className={style.navContainer}>
          <div>
              <button>Btm</button>
          </div>
          <div>
              <button>BUTTON</button>
          </div>
          <div>
              <button>KNOPKA</button>
          </div>
      </nav>
    );
}

export default NavBar;
