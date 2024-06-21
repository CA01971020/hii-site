export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-56 pb-56 text-white text-center"
    >
      <h1 className=" text-3xl">連絡</h1>
      <div className="mt-48 flex gap-10 justify-center">
        <a
          href="https://x.com/aputech2024"
          className="underline underline-offset-2"
        >
          Twitter DM
        </a>
        <p>or</p>
        <a
          href="mailto:CA01971020@st.kawahara.ac.jp"
          className="underline underline-offset-2"
        >
          EMail
        </a>
      </div>
    </section>
  );
}
