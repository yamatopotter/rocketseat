import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1599697777020-57693fa1bffe?w=500&auto=format&fit=crop&q=30&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwJUMzJUFBfGVufDB8fDB8fHww"
      />
      <div className={styles.profile}>
        <img
          src="https://github.com/yamatopotter.png"
          alt=""
          className={styles.avatar}
        />

        <strong>Matheus Barreto</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
