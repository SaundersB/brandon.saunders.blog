import React from "react"
import {graphql, Link} from "gatsby"
import Header from '../components/header';
import "../components/layout.css";

interface IndexPageInterface {
    data: any
}

interface MarkdownInterface {
    edges: any[]
}

export default function IndexPage({data}: IndexPageInterface)
{

    const { edges: posts }: MarkdownInterface = data.allMarkdownRemark
    return (
        <div>
            <Header siteTitle={'Brandon Saunders Blog'}/>
            <div className="blog-posts" style={{
                maxWidth: 960,
                padding: `1.45rem`,
                margin: 'auto'
            }}>
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div className="blog-post-preview" key={post.id}>
                                <h1>
                                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                </h1>
                                <h2>{post.frontmatter.date}</h2>
                                <p>{post.excerpt}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                    }
                }
            }
        }
    }
`
