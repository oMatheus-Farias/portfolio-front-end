import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Logo from "@/components/logo"

const AdminLogin = () => {
  const { password } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (password !== import.meta.env.VITE_SECRET_LOGIN) {
      return navigate("/")
    }
  }, [password, navigate])

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-background-login bg-cover bg-center bg-no-repeat">
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="absolute -top-7 flex h-14 w-56 items-center justify-center rounded-[5px] bg-purpleLogoLogin sm:-top-10 sm:h-20 sm:w-[400px] sm:rounded-[10px]">
          <Logo className="w-36 sm:w-56" />

          <div className="absolute -bottom-3 h-8 min-w-[80%] rounded-[5px] bg-purpleLogoLogin/65 sm:-bottom-6 sm:h-11 sm:rounded-[10px]"></div>
        </div>

        <div className="flex w-full max-w-[90%] flex-col rounded-[10px] bg-violet-horizontal p-[1px] shadow-md sm:max-w-[612px]">
          <form className="flex min-h-full w-full flex-col gap-12 rounded-[10px] bg-primary px-4 pb-10 pt-20 sm:gap-24 sm:px-20 sm:pt-32">
            <div className="flex w-full flex-col gap-4 sm:gap-10">
              <div className="h-10 w-full rounded-[5px] bg-violet-horizontal p-[1px] sm:h-12">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="h-full w-full rounded-[5px] bg-primary px-4 text-white outline-none placeholder:text-purpleClean"
                />
              </div>
              <div className="h-10 w-full rounded-[5px] bg-violet-horizontal p-[1px] sm:h-12">
                <input
                  type="password"
                  placeholder="Senha"
                  className="h-full w-full rounded-[5px] bg-primary px-4 text-white outline-none placeholder:text-purpleClean"
                />
              </div>
            </div>

            <button className="h-12 w-full rounded-[5px] bg-secondary text-lg font-bold uppercase text-white transition-all duration-300 ease-linear hover:bg-purpleClean sm:h-14 sm:text-xl">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin
