import { useState } from "react";
import img from './assets/images/illustration-article.svg';
import pfp from './assets/images/image-avatar.webp';

function App() {

  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(!active)} tabIndex={0} className="cursor-pointer group inline-flex flex-col w-[38.4rem] p-[2.4rem] bg-[var(--color-white)] rounded-[2rem] gap-[2.4rem]  shadow-[0.8rem_0.8rem_0px_rgba(0,0,0,100)] border-[0.1rem] border-[var(--color-black)]">
      <img className="rounded-[1rem]" src={img} alt="card image" />
      <div className="flex flex-col gap-[1.2rem]">  
        <p className="w-max leading-[150%] rounded-[0.4rem] px-[1.2rem] py-[0.4rem] bg-[var(--color-yellow)] text-[1.4rem] font-[var(--font-body)] font-extrabold">Learning</p>
        <p className="w-max leading-[150%] font-[var(--font-body)] font-medium text-[1.4rem] text-[var(--color-gray-950)]">Published 21 Dec 2023</p>
        <p className={`text-[2.4rem] font-extrabold transition hover:text-[var(--color-yellow)] ${active ? "text-[var(--color-yellow)]" : "text-[var(--color-gray-950)]"}`}>
          HTML & CSS foundations
        </p>        
        <p className="flex-wrap leading-[150%] font-[var(--font-body)] font-medium text-[1.6rem] text-[var(--color-gray-500)]">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="flex items-center gap-[1.2rem]">
          <img className="w-[3.2rem] rounded-[50%]" src={pfp} alt="profile picture" />
          <p className="text-[1.4rem] text-[var(--color-gray-950)] font-[var(--font-body)] font-extrabold">Greg Hooper</p>
        </div>
      </div>
    </div>

  )
}

export default App
