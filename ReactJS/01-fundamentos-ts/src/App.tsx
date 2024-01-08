import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yamatopotter.png",
      name: "Matheus Barreto",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, voluptatibus.",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius sapiente maiores. Nihil expedita et incidunt doloremque consequatur magni eveniet.",
      },
      {
        type: "link",
        content: "https://github.com/yamatopotter",
      },
    ],
    publishedAt: new Date("2024-01-04 20:05:05"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/yamatopotter.png",
      name: "Matheus Barreto",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, voluptatibus.",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius sapiente maiores. Nihil expedita et incidunt doloremque consequatur magni eveniet.",
      },
      {
        type: "link",
        content: "https://github.com/yamatopotter",
      },
    ],
    publishedAt: new Date("2024-01-04 20:05:05"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return <Post 
              key={post.id}
              post={post}
            />
          })}
        </main>
      </div>
    </div>
  );
}
