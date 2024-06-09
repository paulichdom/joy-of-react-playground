import Layout from './components/Layout';
import MediaPlayer from './components/MediaPlayer';

function App() {
  return (
    <Layout>
      <MediaPlayer src='https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3'/>
    </Layout>
  );
}

export default App;
