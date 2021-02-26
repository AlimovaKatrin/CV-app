import NavBar from './components/Nav-bar/Nav-bar';
import style from './App.module.scss';
import Routing from './components/Router/Routing';

function App () {
    return (
        <>
            <div className={style.app}>
                <NavBar/>
                <div className={style.contentContainer}>
                    <Routing/>
                </div>
            </div>
        </>
    );
}

export default App;
