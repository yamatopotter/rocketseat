import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/yamatopotter.png"
            alt=""
            className={styles.avatar}
          />

          <div className={styles.authorInfo}>
            <strong>Matheus Barreto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="13 de fevereiro de 2023 às 14:00h"
          dateTime="2024-02-13 14:00:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <p>Aut unde dolores voluptate iusto. Soluta similique, quisquam molestias fugiat ducimus reiciendis vero exercitationem commodi fugit quas, beatae, ab </p>voluptas consectetur ipsum cum unde repellat.
        
        <p>Soluta ratione nulla voluptate maiores. Quo iusto ullam neque ad quidem minima voluptates animi fuga accusamus fugiat!</p>
      </div>
    </article>
  );
}
