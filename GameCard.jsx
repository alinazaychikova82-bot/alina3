import { useState, useEffect } from 'react';

function GameCard({ name, emoji, rating }) {
  const [likes, setLikes] = useState(0);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    document.title = `${likes} like`;
  }, [likes]);

  useEffect(() => {
    console.log('Карточка появилась');
  }, []);

  return (
    <div className="card">
      <h2>{emoji} {name}</h2>
      <p>Рейтинг: ⭐ {rating}/10</p>

      <button onClick={() => setLikes(likes + 1)}>
        👍 {likes}
      </button>

      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? '⭐ В избранном' : '☆ В избранное'}
      </button>
    </div>
  );
}

export default GameCard;