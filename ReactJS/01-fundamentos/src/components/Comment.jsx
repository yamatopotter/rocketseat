import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/yamatopotter.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Barreto</strong>
              <time
                title="13 de fevereiro de 2023 às 14:00h"
                dateTime="2024-02-13 14:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Excluir comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla
            esse aut veritatis harum saepe!
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
