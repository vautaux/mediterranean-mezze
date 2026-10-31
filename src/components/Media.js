import Image from "next/image";

// Unsplash photo ids (free licence) used across the page.
export const photos = {
  oliveOil: "1474979266404-7eaacbcd87c5",
  pomegranate: "1574709755254-fcd942d09d5a",
};

export const unsplash = (id) => `https://images.unsplash.com/photo-${id}`;

export function VideoFrame({ label, tone = "ember" }) {
  return (
    <div className={`media video-frame tone-${tone}`} role="img" aria-label={label}>
      <span className="play" aria-hidden="true" />
      <span className="media-meta">
        <span className="media-kind">Video</span>
        <span className="media-label">{label}</span>
      </span>
    </div>
  );
}

export function ImageFrame({ label, tone = "sumac", shape = "rect", photo, sizes = "33vw" }) {
  return (
    <div
      className={`media image-frame shape-${shape} tone-${tone}${photo ? " has-photo" : ""}`}
      role={photo ? undefined : "img"}
      aria-label={photo ? undefined : label}
    >
      {photo ? (
        <Image src={unsplash(photo)} alt={label} fill sizes={sizes} className="photo" />
      ) : (
        <span className="media-meta">
          <span className="media-kind">Image</span>
          <span className="media-label">{label}</span>
        </span>
      )}
    </div>
  );
}
