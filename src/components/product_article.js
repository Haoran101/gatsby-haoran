import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CustomCard = ({ key, frontmatter, color }) => {

    const tagItems = frontmatter.tags.map((tag_content) =>
        <li className="tag__item" key={tag_content}>{tag_content}</li>
    )

    const colorName = "postcard dark " + color
    const image = getImage(frontmatter.index_image)

    return (<article className={colorName} key={key}>
        <Link className="postcard__img_link" to={`/project/${frontmatter.slug}`}>
            <GatsbyImage className="postcard__img" image={image} alt={frontmatter.img_title}/>
        </Link>
        <div className="postcard__text">
            <h1 className="postcard__title blue"><Link to={`/project/${frontmatter.slug}`}>{frontmatter.project_title}</Link></h1>
            <div className="postcard__subtitle small">
                {frontmatter.project_subtitle}
            </div>
            <ul className="postcard__tagbox">
                {tagItems}
            </ul>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">{frontmatter.description}</div>
        </div>
    </article>);
}

export default CustomCard