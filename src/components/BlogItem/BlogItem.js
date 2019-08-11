import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'
import Img from 'gatsby-image'

import BlogHeader from '../BlogHeader'

const BlogItem = ({ item }) => {
  const classes = useStyles()
  const entryLink = useMemo(() => `/blog/${item.fields.slug}`, [item])
  return (
    <Card className={classes.root}>
      <CardMedia>
        <Link to={entryLink} className="link--no-style">
          <Img
            fluid={item.frontmatter.banner.childImageSharp.fluid}
            alt={item.frontmatter.title}
          />
        </Link>
      </CardMedia>
      <CardContent>
        <BlogHeader
          variant="h5"
          component="h2"
          titleLink={entryLink}
          date={item.frontmatter.date}
          title={item.frontmatter.title}
          tags={item.frontmatter.tags}
        />
        <Typography variant="body2" component="p" className={classes.excerpt}>
          {item.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={entryLink} size="small" color="primary">
          Leer más
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogItem
