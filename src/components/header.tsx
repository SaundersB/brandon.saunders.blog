import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialMediaLinksComponent from '@bit/saundersb.common.social-media-links-component';

interface HeaderInterface {
    siteTitle: string
}

const Header = ({siteTitle}: HeaderInterface) => (
    <header
        style={{
            background: `steelblue`,
            marginBottom: `1.45rem`,
            justifyContent: 'space-between'
        }}
    >
        <div style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'flex-end'
        }}>
            <SocialMediaLinksComponent/>
        </div>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
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
