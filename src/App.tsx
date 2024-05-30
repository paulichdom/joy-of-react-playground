import Layout from './components/Layout';
import MediaPlayer from './components/MediaPlayer';

const DEMO_SONG_SRC = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3';

function App() {
  return (
   <Layout>
    <MediaPlayer src={DEMO_SONG_SRC} />
   </Layout>
  );
}

export default App;
