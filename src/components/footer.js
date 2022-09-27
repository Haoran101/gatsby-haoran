import * as React from 'react';
import {
    column,
    row,
    footerStyle,
    headerContent,
    valueContent,
    linkStyle,
    tooltip,
    tooltiptext,
    button,
    copyicon,
    dottedDivider
} from './footer.module.css'
import { StaticImage } from "gatsby-plugin-image"

const email = "wei.haoran@hotmail.com"
const phone = "+65 85101992"

const ContactFooter = () => {
    return <footer className={footerStyle}>
        <hr className={dottedDivider}></hr>
        <div class={row}>
            <div className={column}>
                <p className={headerContent}>Email</p>
                <p className={valueContent}>
                    <a className={linkStyle} href={"mailto:" + email}>
                        {email}
                    </a>
                </p>
            </div>
            <div className={column}>
                <p className={headerContent}>Mobile</p>
                <span className={valueContent}>{phone}</span>
                <div className={tooltip}>
                <button className={button}
                    onClick={handleCopyPhone}
                >
                    <span className={tooltiptext} id="myTooltip">Copy to clipboard</span>
                    <StaticImage 
                    src="../images/content_copy.png"
                    layout="constrained"
                    width="18"
                    className={copyicon}
                    ></StaticImage>
                </button>
                </div>
            </div>
            <div className={column}>
                <p>Social Media</p>
                <div>
                    <a href="https://www.linkedin.com/in/haoran-wei-6b3a571a5/" rel="noreferrer" target="_blank">
                        <StaticImage
                            src="../images/icons8-linkedin-circled-90.png"
                            alt="Linkedin"
                            layout="constrained"
                            width="25" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
}

function handleCopyPhone() {
    let textCopy = phone.replace(" ", "");
    navigator.clipboard.writeText(textCopy);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + textCopy;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

export default ContactFooter