import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';
export default function App() {
  return (
    <div>
      <Section title="Топ тижня">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
//це називається композиція, один копонент в середині іншого
