export default function Painting({ url, title, profileUrl, author, price }) {
  return (
    <div>
      <img src="{url}" alt="{title}" width="480" />
      <h2>{title}</h2>
      <p>
        Автор <a href="{profileUrl}">{author}</a>
      </p>
      <p> Ціна:{price} кредитів </p>
      <p> Доступність</p>
      <button type="button">Добавити в корзину</button>
    </div>
  );
}