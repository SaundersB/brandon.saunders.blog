// @ts-ignore
import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby";
import "../components/layout.css";
import Header from "../components/header";

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`

interface TemplateInterface {
    data: any
}

export default function Template({ data }: TemplateInterface) {
    const {markdownRemark: post} = data // data.markdownRemark holds your post data
    return (
        <div className="blog-post-container">
            <Header/>
            <Helmet title={`Your Blog Name - ${post.frontmatter.title}`}/>
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{__html: post.html}}
                />
            </div>
        </div>
    )
}
