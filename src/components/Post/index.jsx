import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import './style.scss';

class Post extends React.Component {
  render() {
    const { title, date, category, description, image } = this.props.data.node.frontmatter;
    const { slug, categorySlug } = this.props.data.node.fields;

    return (
      <div className="post">
        <Link to={slug} className="post__left">
          <div className="post__left__wrap">
            <img
              src={image}
              alt=""/>
          </div>
        </Link>
        <div className="post__right">
          <h2 className="post__title">
            <Link className="post__title-link" to={slug}>{title}</Link>
          </h2>
          <time className="post__meta-time" dateTime={moment(date)
            .format('MMMM D, YYYY')}>
            {moment(date)
              .format('MMMM D, YYYY')}
          </time>
          <p className="post__description">{description}</p>
          <span className="post__category" key={categorySlug}>
            <img src="https://image.flaticon.com/icons/svg/25/25628.svg" alt=""/>
            <Link to={categorySlug} className="post__meta-category-link">
               {category}
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Post;
