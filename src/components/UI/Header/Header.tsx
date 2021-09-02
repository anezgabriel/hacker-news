import classes from './Header.module.css';
import headerLogo from '../../../img/hacker-news.png';
import Layout from '../../layout/Layout';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Layout>
        <img src={headerLogo} alt="Hacker News" />
      </Layout>
    </header>
  );
};

export default Header;
