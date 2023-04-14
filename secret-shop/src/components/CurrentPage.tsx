import { CurrentPageProps } from '../types/types';

const CurrentPage = ({ page }: CurrentPageProps) => {
  return (
    <>
      <h2>Current Page: {page}</h2>
    </>
  );
};

export default CurrentPage;
