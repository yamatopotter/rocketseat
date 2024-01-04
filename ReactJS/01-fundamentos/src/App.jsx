import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Matheus Barreto"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quo?"
          />
          <Post
            author="Sunday"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quo?"
          />
        </main>
      </div>
    </div>
  );
}