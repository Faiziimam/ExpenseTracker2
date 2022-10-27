import "./card.css";

export default function Card({ children, className }) {
  // const classes='class' + props.className;
  return <div className={`class + ${className}`}>{children}</div>;
}
