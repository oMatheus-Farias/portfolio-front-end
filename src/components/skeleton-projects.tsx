import { Skeleton } from "./ui/skeleton"

const SkeletonProjects = () => {
  return (
    <div className="mt-14 flex min-w-[21.25rem] flex-col lg:mt-5 lg:min-w-[33.125rem]">
      <Skeleton className="h-[17.5rem] w-full rounded-[0.625rem] bg-slate-500 lg:h-[21.875rem] lg:w-[34.375rem]" />
    </div>
  )
}

export { SkeletonProjects }
