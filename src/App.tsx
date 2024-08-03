import { Award } from 'react-feather';
import IconButton from './components/IconButton';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <IconButton icon={Award}>Take photo</IconButton>
    </Layout>
  );
}

export default App;
