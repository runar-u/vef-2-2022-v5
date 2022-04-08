
import { Link } from 'next/link';
import s from './Events.module.scss';

export function Events({ title, events }) {

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {events.map((item, i) => {
          return (
            <li key={i}>
                <a href={`/events/${item.id}`}>{item.name}</a>
                <p>{item.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}