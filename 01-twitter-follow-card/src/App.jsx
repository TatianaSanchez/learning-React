import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Migeul Angel Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H",
    isFollowing: false,
  },
  {
    userName: "tati2895",
    name: "Tatiana Sanchez ",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
      ))
      }
    </section>
  );
}
