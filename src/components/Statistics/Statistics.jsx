import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stats_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={`${css.stats} ${css[label.slice(1)]}`} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
