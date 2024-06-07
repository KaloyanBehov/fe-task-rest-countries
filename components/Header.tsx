import ThemeSwitcher from "./ThemeSwitcher";
const MainHeader = () => {
  return (
    <header className="border-b-3 h-[64px] p-3 flex items-center justify-between shadow-md border-white dark:border-gray-800 dark:bg-dark-blue">
      <p className="font-bold">Where in the world?</p>
      <ThemeSwitcher />
    </header>
  );
};

export default MainHeader;
