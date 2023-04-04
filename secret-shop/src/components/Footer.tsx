import rssLogo from '../assets/img/rss-logo.svg';
import '../styles/blocks/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap container">
        <div className="footer__info">
          <span className="footer__info-year">Year of creation: 2023</span>
        </div>
        <a href="https://rs.school/js/" className="footer__rss">
          <img src={rssLogo} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
