import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';
import styled from 'styled-components';

const Text = styled.p`
  color: red;
`;

export default function App() {
  return (
    <div>
      <Text>Themes</Text>
      <Section title="Топ тижня">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
//це називається композиція, один копонент в середині іншого
