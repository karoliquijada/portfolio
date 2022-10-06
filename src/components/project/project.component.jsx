import Button from "../button/button.component";
import "./project.styles.scss";

const Project = ({ title, url, demo, description, img }) => {
  return (
    <article>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">
       {description}
      </p>
      <div className="buttos-container">
        <Button url={url} children="Source code" buttonType="active" />
        <Button url={demo} children="Demo" buttonType="inactive" />
      </div>

      <div className="img-container">
        <img src={img} alt={title} />
      </div>
    </article>
  );
};

export default Project;
