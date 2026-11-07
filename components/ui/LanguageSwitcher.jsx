import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./LanguageSwitcher.module.scss";

const languages = [
  { locale: "tr", src: "/images/flags/tr.svg", label: "Türkçe" },
  { locale: "en", src: "/images/flags/gb.svg", label: "English" },
];

const LanguageSwitcher = ({ onChange }) => {
  const { push, locale: current } = useRouter();

  const handleClick = (locale) => {
    push("/", undefined, { locale });
    onChange?.();
  };

  return (
    <div className={classes.container}>
      {languages.map(({ locale, src, label }) => (
        <button
          key={locale}
          type="button"
          aria-label={label}
          title={label}
          onClick={() => handleClick(locale)}
          className={`${classes.flag} ${
            locale === current ? classes.active : ""
          }`}
        >
          <Image src={src} alt="" width={28} height={28} unoptimized />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
