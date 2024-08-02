import Layout from './components/Layout';
import List from './components/List/List';

function App() {
  return (
    <Layout>
      <List as="ol" type="i">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </List>
    </Layout>
  );
}

export default App;
