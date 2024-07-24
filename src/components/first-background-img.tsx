const FirstBackgroundImage = () => {
  return (
    <>
      <img
        src="/background-01-mobile.png"
        alt="Background"
        className="absolute z-[-1] h-full w-full lg:hidden"
      />

      <img
        src="/background-01.png"
        alt="Background"
        className="absolute top-[700px] z-[-1] hidden h-full w-full lg:block lg:h-auto 0xl:hidden"
      />

      <img
        src="/background-01-xl.png"
        alt="Background"
        className="absolute top-[980px] z-[-1] hidden h-[800px] w-full 0xl:block"
      />
    </>
  )
}

export { FirstBackgroundImage }
