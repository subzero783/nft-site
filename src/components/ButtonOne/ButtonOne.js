const ButtonOne = ({ link, text, target }) => {
  const refValue = () => {
    if (target === "_blank") {
      return "noopener noreferrer";
    } else {
      return "";
    }
  };

  return (
    <a
      href={link}
      aria-label={text}
      target={target}
      ref={refValue}
    >
      {text}
    </a>
  );
};

export default ButtonOne;
