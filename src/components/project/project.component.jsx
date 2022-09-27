import Button from "../button/button.component";
import "./project.styles.scss";
import imagen from "../../assets/img/rick-and-morty.png";

const Project = ({ title = "title" }) => {
  return (
    <article>
      <h2 className="project-title">Rick and Morty Wiki</h2>
      <p className="project-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum at omnis illo suscipit non et illum numquam libero consequuntur
        nulla laboriosam eos molestias quod dolore in dolor, provident est alias.
      </p>
      <div className="buttos-container">
        <Button children="Source code" buttonType="active" />
        <Button children="Demo" buttonType="inactive" />
      </div>

      <div className="img-container">
        <img src={imagen} alt="img proyecto" />
      </div>
    </article>
  );
};

export default Project;
