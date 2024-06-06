import ThemeSwitcher from "../theme/ThemeSwitcher";
const MainHeader = () => {
  return (
    <header className="border-b-3 shadow-md border-white dark:border-gray-800" >
      <div className="flex justify-between mx-12 my-4">
        <p className="font-bold">Where in the world?</p>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default MainHeader;
