import meImgDesktop from "/me-img-desktop.png"
import meImgMobile from "/me-img-mobile.png"

const MeImage = () => {
  return (
    <>
      <img
        src={meImgMobile}
        alt="Matheus Farias"
        className="h-[370px] w-full object-contain md:hidden"
      />
      <img
        src={meImgDesktop}
        alt="Matheus Farias"
        className="hidden h-[25rem] w-full object-contain md:block lg:h-[43.75rem]"
      />
    </>
  )
}

export { MeImage }
