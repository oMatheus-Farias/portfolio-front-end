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
        className="hidden h-[400px] w-full object-contain md:block lg:h-[700px]"
      />
    </>
  )
}

export { MeImage }
