import { Link } from "gatsby";
import React from "react";

const CustomCard = ({ frontmatter, color }) => {

    console.log(frontmatter.tags)

    const tagItems = frontmatter.tags.map((tag_content) =>
        <li className="tag__item" key={tag_content}>{tag_content}</li>
    )

    const colorName = "postcard dark " + color

    console.log(colorName)

    return (<article className={colorName}>
        <Link className="postcard__img_link" to="/">
            <img className="postcard__img" src={frontmatter.img_src} alt={frontmatter.img_title} />
        </Link>
        <div className="postcard__text">
            <h1 className="postcard__title blue"><Link to="/">{frontmatter.project_title}</Link></h1>
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