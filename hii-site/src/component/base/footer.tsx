export default function CustomFooter() {
  return (
    <footer className="w-full h-10 text-base text-Customblack bg-white ">
      <div className="cursor-default pt-2 flex">
        <div className=" absolute left-3">
          <p className="copyright">&copy;2024 hii Site.</p>
        </div>
        <div className=" absolute right-6 text-Customblue">
          <a href="https://x.com/aputech2024" className=" mr-4 p-0.5">
            Twitter
          </a>
          <a href="https://zenn.dev/aputech" className=" mr-4 p-0.5">
            Zenn
          </a>
          <a href="https://note.com/hii_hgmt/" className="p-0.5">
            note
          </a>
        </div>
      </div>
    </footer>
  );
}
