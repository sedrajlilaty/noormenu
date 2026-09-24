import categories from "./data/categories.json"

export default function CategoriesGrid() {
  return (
    <div className="flex flex-wrap justify-start gap-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="
            relative
            w-28 h-28
            rounded-xl
            overflow-hidden
            cursor-pointer
            bg-cover bg-center
            transition-transform duration-300
            hover:-translate-y-2
          "
          style={{ backgroundImage: `url(${cat.image})` }}
        >
         
<div className="absolute inset-0 bg-[#9e7642]/40 backdrop-blur-[1px]" />
          <span className="
            absolute
            inset-0
            text-center
            text-white
            text-sm
            font-bold
            px-2
            flex
             items-center
            justify-center
          ">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  )
}