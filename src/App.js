import ProjectPage from './pages/Projects-page/Project-page';
import NavBar from './components/Nav-bar/Nav-bar';
import style from './App.module.scss';

function App() {
    return (
      <div className={style.app}>
          <div>
              <NavBar/>
          </div>
          <div>
              <ProjectPage/>
          </div>
      </div>
    );
}

export default App;
