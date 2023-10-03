import { MainPanel } from './components/mainPanel';
import { SidePanel } from './components/sidePanel';

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
        <SidePanel/>
        <MainPanel/>
    </div>
  );
}

export default App;
