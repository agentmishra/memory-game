import Team1 from './team1/Team1';
import Team2 from './team2/Team2';
import Team3 from './team3/Team3';
import styles from './app.module.css';
import { useState } from 'react';

const teamComponent = [<Team1 />, <Team2 />, <Team3 />];

function App() {
  const [team, setTeam] = useState<number>();

  return (
    <>
      <div className={styles.app}>
        <h2 className={styles.h2}>Memory Game</h2>
        <div className={styles.teams}>
          <button onClick={() => setTeam(1)}>Team 1</button>
          <button onClick={() => setTeam(2)}>Team 2</button>
          <button onClick={() => setTeam(3)}>Team 3</button>
        </div>
      </div>
      {team && teamComponent[team - 1]}
    </>
  );
}

export default App;
