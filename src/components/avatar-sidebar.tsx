import meAvatar from "/me-avatar.jpg"

const AvatarSidebar = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={meAvatar}
        alt="Matheus Farias"
        className="h-28 w-28 rounded-full object-cover"
      />

      <span className="font-semibold text-white">Matheus Farias</span>
    </div>
  )
}

export { AvatarSidebar }
