import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight, BiGridAlt } from "react-icons/bi";
import { imageUrl } from "@/client";
import classes from "./PhotoGrid.module.scss";

// Fixed widths (no srcset) so the grid, lightbox and preloads all reuse the
// same Sanity CDN URLs and hit the browser/CDN cache.
const thumbSrc = (item) => imageUrl(item, 800);
const fullSrc = (item, width) => imageUrl(item, width);

// Mosaic on desktop, horizontal swipe row on mobile, shared lightbox.
// With `limit`, desktop shows the first `limit` photos and a "show all" button.
const PhotoGrid = ({ images, label, limit, showAllLabel, lazy }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [fullWidth, setFullWidth] = useState(1600);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const isOpen = openIndex !== null;
  const isLimited = limit && !expanded && images.length > limit;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  // Preload the neighbours so the arrows feel instant.
  useEffect(() => {
    if (!isOpen) return;
    [1, -1, 2].forEach((offset) => {
      const i = (openIndex + offset + images.length) % images.length;
      const img = new window.Image();
      img.src = fullSrc(images[i], fullWidth);
    });
  }, [isOpen, openIndex, images, fullWidth]);

  const open = (index) => {
    setFullWidth(window.innerWidth <= 768 ? 1080 : 1600);
    setOpenIndex(index);
  };

  const altFor = (item, index) => item.alt || `${label} ${index + 1}`;
  const currentFull = isOpen ? fullSrc(images[openIndex], fullWidth) : null;

  return (
    <div className={classes.wrapper}>
      <ul className={classes.grid}>
        {images.map((item, index) => (
          <li
            key={item._key || index}
            className={`${classes.item} ${
              isLimited && index >= limit ? classes.hiddenDesktop : ""
            }`}
          >
            <button
              type="button"
              onClick={() => open(index)}
              aria-label={altFor(item, index)}
            >
              <Image
                src={thumbSrc(item)}
                alt={altFor(item, index)}
                fill
                unoptimized
                priority={!lazy && index < 5}
                style={{ objectFit: "cover" }}
              />
            </button>
          </li>
        ))}
      </ul>

      {limit && images.length > limit && (
        <button
          type="button"
          className={classes.showAll}
          onClick={() => setExpanded((v) => !v)}
        >
          <BiGridAlt />
          {expanded ? "−" : showAllLabel}
        </button>
      )}

      {isOpen && (
        <div
          className={classes.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={classes.closeBtn}
            onClick={close}
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>
          <button
            type="button"
            className={`${classes.arrow} ${classes.arrowLeft}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <BiChevronLeft />
          </button>
          <div
            className={classes.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={`thumb-${openIndex}`}
              src={thumbSrc(images[openIndex])}
              alt=""
              fill
              unoptimized
              style={{ objectFit: "contain" }}
            />
            <Image
              key={currentFull}
              src={currentFull}
              alt={altFor(images[openIndex], openIndex)}
              fill
              unoptimized
              priority
              onLoad={() => setLoadedSrc(currentFull)}
              className={`${classes.full} ${
                loadedSrc === currentFull ? classes.fullLoaded : ""
              }`}
              style={{ objectFit: "contain" }}
            />
            {loadedSrc !== currentFull && (
              <span className={classes.spinner} aria-hidden="true" />
            )}
          </div>
          <button
            type="button"
            className={`${classes.arrow} ${classes.arrowRight}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <BiChevronRight />
          </button>
          <span className={classes.counter}>
            {openIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
