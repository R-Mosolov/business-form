import './Page.styles.scss';
import { PREFIX } from "../../constants/servicePrefix";
import { Sidebar } from "..";

export const Page = ({ children }) => {
  return (
    <main className={PREFIX + 'page'}>
      <Sidebar />
      {children}
    </main>
  );
};