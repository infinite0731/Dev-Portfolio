import useThemeSwitcher from "./hook/useThemeSwitcher";

export default function ThemeSwitcher() {
  const [activeTheme, setTheme] = useThemeSwitcher();
  return (
    <div
      className="absolute top-6 md:left-[2%] lg:left-[7%] xl:left-[15%] left-[2%] z-[9998] cursor-pointer backdrop-blur-xl rounded-full"
      onClick={() => setTheme(activeTheme)}
    >
      {activeTheme === "light" ? (
        <img alt="" src="/svgs/moon.svg" className="w-[40px] h-[40px]" />
      ) : (
        <img alt="" src="/svgs/sun.svg" className="w-[40px] h-[40px]" />
      )}
    </div>
  );
}
