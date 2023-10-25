import PropTypes from "prop-types";

function TextIcon({ srcSet }) {
  return (
    <>
      <img
        loading="lazy"
        srcSet={srcSet}
        className="tw-aspect-square  tw-object-center tw-w-[22px] tw-overflow-hidden tw-self-stretch tw-max-w-full"
        alt="Image"
      />
    </>
  );
}

TextIcon.propTypes = {
  srcSet: PropTypes.string.isRequired,
};

export default TextIcon;
