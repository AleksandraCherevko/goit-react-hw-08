import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const disaptch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={() => disaptch(logOut())}>
        Logout
      </button>
    </div>
  );
}
