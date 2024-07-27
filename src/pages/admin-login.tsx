import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle } from "lucide-react"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { z } from "zod"

import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { AuthContext } from "@/contexts/auth-context"

const formSchema = z.object({
  email: z
    .string({
      required_error: "E-mail é obrigatório.",
    })
    .email({
      message: "E-mail inválido.",
    }),
  password: z
    .string({
      required_error: "Senha é obrigatória.",
    })
    .min(8, {
      message: "Senha deve conter no mínimo 8 caracteres.",
    }),
})

type FormData = z.infer<typeof formSchema>

const AdminLogin = () => {
  const { password } = useParams()
  const navigate = useNavigate()

  const { loading, handleLogin } = useContext(AuthContext)

  useEffect(() => {
    if (password !== import.meta.env.VITE_SECRET_LOGIN) {
      return navigate("/")
    }
  }, [password, navigate])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: FormData) => {
    handleLogin(data)
    form.reset()
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-background-login bg-cover bg-center bg-no-repeat">
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="absolute -top-7 flex h-14 w-56 items-center justify-center rounded-[5px] bg-purpleLogoLogin sm:-top-10 sm:h-20 sm:w-[400px] sm:rounded-[10px]">
          <Logo className="w-36 sm:w-56" />

          <div className="absolute -bottom-3 h-8 min-w-[80%] rounded-[5px] bg-purpleLogoLogin/65 sm:-bottom-6 sm:h-11 sm:rounded-[10px]"></div>
        </div>

        <div className="flex w-full max-w-[90%] flex-col rounded-[10px] bg-violet-horizontal p-[1px] shadow-md sm:max-w-[612px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex min-h-full w-full flex-col gap-14 rounded-[10px] bg-primary px-4 pb-10 pt-20 sm:gap-24 sm:px-20 sm:pt-32"
            >
              <div className="flex w-full flex-col gap-10 sm:gap-10">
                <div className="h-10 w-full rounded-[5px] bg-violet-horizontal p-[1px] sm:h-12">
                  <FormField
                    name="email"
                    control={form.control}
                    render={() => (
                      <FormItem className="h-full">
                        <FormControl>
                          <input
                            {...form.register("email")}
                            type="email"
                            placeholder="E-mail"
                            className="h-full w-full rounded-[5px] bg-primary px-4 text-white outline-none placeholder:text-purpleClean"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="h-10 w-full rounded-[5px] bg-violet-horizontal p-[1px] sm:h-12">
                  <FormField
                    name="password"
                    control={form.control}
                    render={() => (
                      <FormItem className="h-full">
                        <FormControl>
                          <input
                            {...form.register("password")}
                            type="password"
                            placeholder="Senha"
                            className="h-full w-full rounded-[5px] bg-primary px-4 text-white outline-none placeholder:text-purpleClean"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-[5px] bg-secondary text-lg font-bold uppercase text-white transition-all duration-300 ease-linear hover:bg-purpleClean sm:h-14 sm:text-xl"
              >
                {loading ? (
                  <LoaderCircle
                    color="#FFF"
                    className="animate-spin duration-500"
                  />
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin
