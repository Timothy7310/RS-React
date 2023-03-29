import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

const AboutUsPage = ({ page }: CurrentPageProps) => {
  return (
    <>
      <Header page={page} />
      <main>
        <div>About us</div>
      </main>
    </>
  );
};

export default AboutUsPage;
