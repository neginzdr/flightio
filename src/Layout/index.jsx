
import Header from "../components/Header/Header";
import BottomNavigationBar from "../components/Navigation/Navigaton";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigationBar/>
    </>
  );
}
