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
        }}
    >
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div
                style={{
                    maxWidth: 960,
                    padding: `1.45rem`,
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}
            >
                <h1 style={{margin: 0}}>
                    <Link
                        to="/"
                        style={{
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
            </div>
            <div style={{
                padding: `0.25rem`
            }}>
                <SocialMediaLinksComponent/>
            </div>
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
