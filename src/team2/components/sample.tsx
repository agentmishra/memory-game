import styles from './sample.module.css';

function Sample({ team }) {
  return <h3 className={styles.heading}>This is team {team} project</h3>;
}

export default Sample;
