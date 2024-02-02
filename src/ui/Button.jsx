import { Link } from "react-router-dom";

function Button(children) {
  const c = children.children;

  const base =
    "focus inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-6 md:py-2.5 text-xs",
    secondary:
      " px-4 py-2.5 md:px-6 text-sm md:py-3.5 focus inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-300 transition-colors duration-300  hover:bg-stone-300 hover:text-stone-800  focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };

  if (children.to)
    return (
      <Link to={children.to} className={styles[children.type]}>
        {c}
      </Link>
    );

  return (
    <button disabled={children.disabled} className={styles[children.type]}>
      {c}
    </button>
  );
}

export default Button;
