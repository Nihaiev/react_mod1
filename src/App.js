import Painting from './components/Painting';
import paintings from './paintings.json';
export default function App() {
  return (
    <div>
      <Painting
        title={paintings[0].title}
        author={paintings[0].author.tag}
        url={paintings[0].url}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
      />

      <Painting
        title={paintings[1].title}
        author={paintings[1].author.tag}
        url={paintings[1].url}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
      />

      <Painting
        title={paintings[2].title}
        author={paintings[2].author.tag}
        url={paintings[2].url}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
      />
    </div>
  );
}

//1: 00:00
