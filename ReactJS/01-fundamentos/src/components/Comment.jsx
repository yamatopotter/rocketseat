import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yamatopotter.png" />

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

            <button onClick={handleDeleteComment} title="Excluir comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
