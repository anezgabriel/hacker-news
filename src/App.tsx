import { useAppSelector } from './app/hooks';
import Layout from './components/layout/Layout';
import Header from './components/Header/Header';
import Toggle from './components/Toggle/Toggle';
import { selectToggle } from './features/news/newsSlice';
import AllPosts from './views/AllPosts/AllPosts';
import MyFaves from './views/MyFaves/MyFaves';

const App: React.FC = () => {
  const toggle = useAppSelector(selectToggle);

  return (
    <div className="App">
      <Header />
      <Layout>
        <Toggle />
        {toggle === 'All' ? <AllPosts /> : <MyFaves />}
      </Layout>
    </div>
  );
};

export default App;
