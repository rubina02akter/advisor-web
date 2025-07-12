export default function DetailsCard({ data }) {
  const { title, originalPrice, discountedPrice, instructor, category, image } =
    data;
    console.log(data)

  return (
    <div>
      <figure>
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <div className="badge badge-success badge-outline mb-2">{category}</div>
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-600">Instructor: {instructor}</p>

        <div className="text-blue-600 font-bold text-base">
          ${discountedPrice?.toFixed(2)}{" "}
          <span className="line-through text-gray-400 text-sm">
            ${originalPrice?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
