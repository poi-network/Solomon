import React from 'react'
import posts from '../json/post.json'
import { Card, CardTitle, CardHeader, CardText } from 'material-ui/Card'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Main from '../components/Main'

const styles = {
  title: {
    paddingBottom: 0
  },
  link: {
    textDecoration: 'none',
    color: '#039be5'
  }
}

const Homepage = () => (
  <Main>
    <Helmet>
      <title>Solomon</title>
    </Helmet>
    {posts.map((post) =>
      <Card key={post.slug}>
        <CardTitle
          style={styles.title}
          title={post.title}
          subtitle={post.tags.map(tag => (
            <Link style={styles.link} to={`/tag/${tag}`} key={tag}>#{tag} </Link>
          ))} />
        <CardHeader title={(new Date(post.date)).toDateString()} actAsExpander showExpandableButton />
        <CardText expandable>
          {post.summary}
        </CardText>
      </Card>
    )}
  </Main>
)

export default Homepage
