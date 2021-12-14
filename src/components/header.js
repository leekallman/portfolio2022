import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--red)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1360,
        // padding: `0.2rem`,
      }}
    >
      <h2 style={{
        margin: 0,
        fontSize: `2vh`
      }}>
        <Link
          to="/"
          style={{
            color: `var(--white)`,
            textDecoration: `none`,
            textTransform: `uppercase`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
