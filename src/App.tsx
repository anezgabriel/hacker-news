import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Layout from './components/layout/Layout';
import Header from './components/Header/Header';
import Toggle from './components/Toggle/Toggle';
import { clearData, fetchData, selectToggle } from './features/news/newsSlice';
import AllPosts from './views/AllPosts/AllPosts';
import MyFaves from './views/MyFaves/MyFaves';
import { selectFilter } from './features/persisted/persistedSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector(selectToggle);
  const filter = useAppSelector(selectFilter);

  useEffect(() => {
    if (filter && filter.name) {
      const params = { query: filter.name };
      dispatch(clearData());
      dispatch(fetchData(params));
    }
  }, [filter, dispatch]);

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
