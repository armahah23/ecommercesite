import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/data.js";
import PropTypes from 'prop-types';

function Footer() {
  return (
    <Footer>
      <div>
        <div>
          <Link to="/" className="mb-10 bold-20">
            Shoppee
          </Link>
          <div>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul>
                  {col.links.map((link) => (
                    <Link to="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}



const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Footer;

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


