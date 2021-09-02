import classes from './Layout.module.css';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = (props) => {
  return <div className={classes.layout}>{props.children}</div>;
};

export default Layout;
