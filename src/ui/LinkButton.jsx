import { Link, useNavigate } from "react-router-dom";

function LinkButton(children) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (children.to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children.children}
      </button>
    );

  return (
    <Link to={children.to} className={className}>
      {children.children}
    </Link>
  );
}

export default LinkButton;
