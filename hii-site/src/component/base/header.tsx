export default function CustomHeader() {
  return (
    <header className="fixed w-full h-24 text-base text-Customblack bg-white">
      <div className=" absolute top-6 left-6 w-12 h-12 bg-Customgreen text-white text-3xl font-semibold rounded-full">
        <p className=" absolute top-2 left-2.5">ひ</p>
      </div>
      <nav className="flex absolute justify-end right-7 top-9">
        <ul className="mr-4 p-0.5">
          <li>Home</li>
        </ul>
        <ul className="mr-4 p-0.5">
          <li>Skill</li>
        </ul>
        <ul className="mr-4 p-0.5">
          <li>Portfolio</li>
        </ul>
        <ul className="text-white bg-Customgreen/50 rounded-full pl-2 pr-2 pb-0.5 pt-0.5">
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
