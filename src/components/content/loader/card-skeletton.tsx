export const CardSkeletton = () => {
  return (
    <div className="w-96 h-52 rounded-lg shadow-lg bg-white flex flex-col justify-around space-y-3 p-5 animate-pulse">
      <div className="w-full h-4 rounded-xl bg-gray-50" />
      <div className="w-full h-4 rounded-xl bg-gray-50" />
      <div className="flex items-center justify-around space-x-2">
        <div className="p-2 bg-gray-50 w-12 h-6" />
        <div className="p-2 bg-gray-50  w-12 h-6" />
        <div className="p-2 bg-gray-50 w-12  h-6" />
        <div className="p-2 bg-gray-50 w-12  h-6" />
        <div className="p-2 bg-gray-50 w-12 h-6" />
      </div>
      <div className="flex justify-between">
        <div className="p-2 bg-gray-50 w-40 h-6" />
        <div>
          <div className="p-2 bg-gray-50 w-12 h-6" />
        </div>
      </div>
    </div>
  )
}
