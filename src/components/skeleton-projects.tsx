import { Skeleton } from "./ui/skeleton"

const SkeletonProjects = () => {
  return (
    <div className="mt-14 flex min-w-[340px] flex-col lg:mt-5 lg:min-w-[530px]">
      <Skeleton className="h-[280px] w-full rounded-[10px] bg-slate-500 lg:h-[350px] lg:w-[550px]" />
    </div>
  )
}

export { SkeletonProjects }
