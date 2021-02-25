import './favorites.scss';
import { useLoadingState } from "../../app/counterContext";


export const Favorites = () => {
  const { count } = useLoadingState();
  const prefer = '';
  const maxPoints = '';
    return (
        <div className="favorites">
          <h3>Favorites</h3>
            <span>about: {count}</span>
            <span>skills: {count}</span>
            <span>projects: {count}</span>
            <span>education: {count}</span>
            <span>experience: {count}</span>
            <span >You prefer to know more about my{prefer}: {maxPoints}</span>
        </div>
    );
}