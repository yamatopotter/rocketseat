import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post show de bola"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe sue feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            content={comment}
            key={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
