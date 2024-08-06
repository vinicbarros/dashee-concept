const cards = [
  {
    name: "News",
    quantity: 18,
  },
  {
    name: "Documents for confirmation",
    quantity: 4,
  },
  {
    name: "Events and training",
    quantity: 7,
  },
  {
    name: "In-progress inspections",
    quantity: 2,
  },
];

export function Summary() {
  return (
    <section>
      <div className="flex mt-6 gap-3">
        <div className="size-16 flex items-center justify-center rounded-full p-2 border">
          <div className="flex items-center justify-center size-12 bg-gradient-to-b from-amber-500 to-amber-600 text-white font-bold text-lg p-2 rounded-full">
            VB
          </div>
        </div>
        <div>
          <p className="text-primary font-bold text-3xl">Vinícius Barros</p>
          <p>Software Developer, Mentor Group LLC</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-center gap-6 mt-6">
        {cards.map((card) => (
          <div
            key={card.name}
            className="flex items-center justify-start border py-4 px-4 rounded-xl lg:w-1/4 h-28 lg:h-24 shadow-sm hover:shadow-lg transition ease-out cursor-pointer"
          >
            <div>
              <p className="text-amber-500 font-bold text-2xl">
                {card.quantity}
              </p>
              <p className="text-sm">{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
