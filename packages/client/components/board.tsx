export function Board() {
  return (
    <section className="w-1/2 h-1/2 grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((cell, index) => (
        <button key={index} className="bg-gray-500 hover:bg-blue-500 " />
      ))}
    </section>
  )
}
