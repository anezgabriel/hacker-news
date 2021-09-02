import Layout from './components/layout/Layout';
import Header from './components/UI/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Layout>
        <h1>hacker news app</h1>
      </Layout>
    </div>
  );
};

export default App;
