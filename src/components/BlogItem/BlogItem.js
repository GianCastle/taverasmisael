import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'
import Img from 'gatsby-image'

const BlogItem = ({ item }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia>
        <Img
          fluid={item.frontmatter.banner.childImageSharp.fluid}
          alt={item.frontmatter.title}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          <Link
            to={`/blog/${item.frontmatter.slug}`}
            className="link--no-style"
          >
            {item.frontmatter.title}
          </Link>
        </Typography>
        <Typography className={classes.date} color="textSecondary">
          Published on: {new Date(`${item.frontmatter.date}T00:00`).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" component="p" className={classes.excerpt}>
          {item.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/blog/${item.frontmatter.slug}`}
          size="small"
          color="primary"
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogItem