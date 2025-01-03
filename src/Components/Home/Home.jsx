
import { ImageWrapper, MainWrapper } from "./style"

function Home() {
  return (
    <MainWrapper>
      <ImageWrapper className="animate-pulse mx-auto" title="mountains" src="./moutain.webp" alt="" />
      <div className="text-center pb-7 text-slate-300 font-extrabold text-4xl font-serif"><div>Your Adventure Awaits.</div> Where Will Your Curiosity Take You?</div>
    </MainWrapper>
  )
}

export default Home