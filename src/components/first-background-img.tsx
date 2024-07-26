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
        className="absolute top-[43.75rem] z-[-1] hidden h-full w-full lg:block lg:h-auto 0xl:hidden"
      />

      <img
        src="/background-01-xl.png"
        alt="Background"
        className="absolute top-[61.25rem] z-[-1] hidden h-[50rem] w-full 0xl:block"
      />
    </>
  )
}

export { FirstBackgroundImage }
