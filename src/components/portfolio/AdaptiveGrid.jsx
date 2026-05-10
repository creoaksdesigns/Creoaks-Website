import ProtectedImage from "../ProtectedImage";

const ImageItem = ({ src, className = "" }) => (
  <div className={`overflow-hidden rounded-2xl group ${className}`}>
    <ProtectedImage
      src={src}
      alt=""
      watermarkText="CREOAKS DESIGN"
      loading="lazy"
      decoding="async"
      className="
        w-full
        h-full
        object-cover
        rounded-2xl
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />
  </div>
);

const AdaptiveGrid = ({ images }) => {
  const previewImages = images.slice(0, 5);
  const count = previewImages.length;

  // ================= 1 IMAGE =================
  if (count === 1) {
    return (
      <div className="grid grid-cols-1 gap-2">
        <ImageItem
          src={previewImages[0]}
          className="h-[500px]"
        />
      </div>
    );
  }

  // ================= 2 IMAGES =================
  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {previewImages.map((img, i) => (
          <ImageItem
            key={i}
            src={img}
            className="h-[400px]"
          />
        ))}
      </div>
    );
  }

  // ================= 3 IMAGES =================
  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-2 h-[600px]">

        {/* LARGE */}
        <ImageItem
          src={previewImages[0]}
          className="h-full"
        />

        {/* STACK */}
        <div className="grid grid-rows-2 gap-2">

          <ImageItem
            src={previewImages[1]}
            className="h-full"
          />

          <ImageItem
            src={previewImages[2]}
            className="h-full"
          />

        </div>
      </div>
    );
  }

  // ================= 4 IMAGES =================
  if (count === 4) {
    return (
      <div className="grid grid-cols-2 gap-2">

        <ImageItem
          src={previewImages[0]}
          className="h-[500px]"
        />

        <ImageItem
          src={previewImages[1]}
          className="h-[500px]"
        />

        <ImageItem
          src={previewImages[2]}
          className="h-[300px]"
        />

        <ImageItem
          src={previewImages[3]}
          className="h-[300px]"
        />

      </div>
    );
  }

  // ================= 5 IMAGES =================
  if (count === 5) {
    return (
      <div className="grid grid-cols-6 gap-2 auto-rows-[250px]">

        {/* LARGE FEATURE */}
        <ImageItem
          src={previewImages[0]}
          className="col-span-6 md:col-span-4 row-span-2"
        />

        {/* SIDE IMAGES */}
        <ImageItem
          src={previewImages[1]}
          className="col-span-3 md:col-span-2"
        />

        <ImageItem
          src={previewImages[2]}
          className="col-span-3 md:col-span-2"
        />

        {/* BOTTOM */}
        <ImageItem
          src={previewImages[3]}
          className="col-span-3"
        />

        <ImageItem
          src={previewImages[4]}
          className="col-span-3"
        />

      </div>
    );
  }

  // ================= FALLBACK 6+ =================
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
      {previewImages.map((img, i) => (
        <ImageItem
          key={i}
          src={img}
          className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
        />
      ))}
    </div>
  );
};

export default AdaptiveGrid;