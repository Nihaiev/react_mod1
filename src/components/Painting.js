import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не відомо',
  price,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор <a href={profileUrl}>{author}</a>
      </p>
      <p> Ціна:{price} кредитів </p>
      <p> Доступність</p>
      <button type="button">Добавити в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string,
};

export default Painting;
