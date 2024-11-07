export default function CustomFooter() {
  return (
    <footer className="w-full h-16 lg:h-20 text-base text-Customblack bg-white ">
      <div className="cursor-default pt-2 flex">
        <div className=" absolute left-3 lg:left-12 mt-3 lg:mt-5">
          <p className="copyright">&copy;2024 hii Site.</p>
        </div>
        <div className=" absolute right-6 lg:right-12 mt-3 lg:mt-5 text-Customblue">
          <a
            href="https://x.com/hiitech2024"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 lg:mr-8 p-0.5 hover:text-Customblue/50"
          >
            Twitter
          </a>
          <a
            href="https://zenn.dev/aputech"
            target="_blank"
            rel="noopener noreferrer"
            className=" mr-4 lg:mr-8 p-0.5 hover:text-Customblue/50"
          >
            Zenn
          </a>
          <a
            href="https://note.com/hii_hgmt/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-0.5 hover:text-Customblue/50"
          >
            note
          </a>
        </div>
      </div>
    </footer>
  );
}
