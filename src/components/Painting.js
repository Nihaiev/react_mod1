import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не відомо',
  price,
  quantity,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор <a href={profileUrl}>{author}</a>
      </p>
      <p> Ціна:{price} кредитів </p>
      <p> Доступність: {quantity < 10 ? 'закінчується' : 'є в наявності'}</p>
      <button type="button">Добавити в корзину</button>
    </div>
  );
};

/**
 * propTypes повинні прописанні для кожного пропа, якщо у нас є prop то на нього має бути прописаний propTypes
 * - пропси бувають обовязкові і не обовязкові, більшість пропсів обовязкові (наврядчи наша карточка омже існувати без якогось пропса)
 * тому по замовчуванню після того як прописали проптайпи вказуємо isRequired
 *  ми кажемо PropTypes.string.isRequired і вони всі будуть обовязкові
 */
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  autho: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
