import {
  PLACEHOLDER_SRC,
  PLACEHOLDER_ALT,
  LOADING_IMAGE_SRC,
  LOADING_IMAGE_ALT,
} from "@/constants";

type TCardProps = {
  imageSrc: string | undefined;
  imageAlt: string | undefined;
  loading?: boolean;
};

export const Card = ({ imageSrc, imageAlt, loading }: TCardProps) => {
  if (loading) {
    return (
      <img
        src={LOADING_IMAGE_SRC}
        alt={LOADING_IMAGE_ALT}
        width="250"
        height="250"
      />
    );
  }

  if (!imageSrc) {
    return (
      <img
        src={PLACEHOLDER_SRC}
        alt={PLACEHOLDER_ALT}
        width="250"
        height="350"
      />
    );
  }

  return <img src={imageSrc} alt={imageAlt} width="250" height="350" />;
};
