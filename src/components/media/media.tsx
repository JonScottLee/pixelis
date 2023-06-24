import { FC, ReactNode } from 'react';
import cx from 'classnames';

type MediaProps = {
  image: string;
  imagePos?: 'left' | 'right';
  content: ReactNode;
  clip?: 'clip-up' | 'clip-down' | 'clip-left' | 'clip-right';
  extraImageClasses?: string;
  extraContentClasses?: string;
};

const rootClasses = 'flex';

export const Media: FC<MediaProps> = ({
  clip,
  content,
  extraContentClasses,
  extraImageClasses,
  image,
  imagePos = 'left ',
}) => {
  const classes = cx(rootClasses, {
    'flex-row-reverse': imagePos === 'right',
  });

  return (
    <div className={classes}>
      <img
        className={`${clip} flex-1 basis-1/2 max-w-[50%] ${extraImageClasses}`}
        alt="yeah"
        src={image}
      />
      <div
        className={`flex-1 basis-1/2 flex items-center p-10 ${extraContentClasses}`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};
