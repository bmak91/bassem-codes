import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import config from '../../config'
import { Layout, Article, Wrapper, ButtonAnchor, ButtonLink, SectionTitle } from '../components'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
    <Layout>
      <Wrapper>
        <Hero>
          <h1>Hi.</h1>
          <p>
            I&apos;m Bassem. I code. Oh.. you wanted to know more?</p><p>
            I'm a full-stack software engineer who likes C#, JavaScript, CSS (yeah, really!), Docker, and DevOps.</p><p>
            I've worked with React (&amp; Native), .Net, Xamarin, node, and others.
        </p>
          <ButtonLink big to="/contact">
              <svg width="1792" height="1792" viewBox="0 0 1792 1792">
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              Contact
          </ButtonLink>
          <ButtonAnchor big target="_blank"
            href={`https://twitter.com/${config.userTwitter}`} 
            style={{ background: '#1da1f2' }}
          >
            <svg viewBox="80 80 250 250"><path d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45 51.34 51.34 0 0 0-87.41 46.78A145.62 145.62 0 0 1 92.4 107.81a51.33 51.33 0 0 0 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65a51.31 51.31 0 0 0 41.15 50.28 51.21 51.21 0 0 1-23.16.88 51.35 51.35 0 0 0 47.92 35.62 102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23" fill="#fff"/><path fill="none" d="M0 0h400v400H0z"/></svg>
              Twitter
          </ButtonAnchor>
        </Hero>
        {/* <Content>
          <SectionTitle>Latest stories</SectionTitle>
          {postEdges.map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              categories={post.node.frontmatter.categories}
              key={post.node.fields.slug}
            />
          ))}
        </Content> */}
      </Wrapper>
    </Layout>
  )

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
