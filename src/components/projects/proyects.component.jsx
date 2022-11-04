import './projects.styles.scss'
import Project from '../project/project.component';
import wiki from '../../assets/img/rick-and-morty.png';
import vitalinea from '../../assets/img/vitalinea.png';
import calculator_app from '../../assets/img/calculator_app.png';

const Projects = () => {
    return (
        <section>
            <h2 className='section-title'>Projects</h2>
            <Project 
                title="Rick and Morty Wiki"
                url="https://github.com/karoliquijada/rick-and-morty-v2" 
                demo="https://rick-and-morty-wiki-igirlicode.netlify.app/"
                description="This project was built with React and Graph QL + Apollo Client. The website is a wiki about Rick and Morty, where you can explore the list of characters (every version of it!) and episodes on the show. I'm also using the Ricki and Morty API. Of couse, fully responsive."
                img={wiki}
            />    
          {/*   <Project 
                title="Calculator App"
                url="https://github.com/karoliquijada/calculator-app" 
                demo="https://calculator-app-igirlicode.netlify.app/"
                description="Frontend Mentor Challenge. This calculator is built with React and Styled-Components. I used a theme provider to implement a three state toggle to manage the theme."
                img={calculator_app}
            />    */} 
              <Project 
                title="Vitalinea"
                url="https://github.com/karoliquijada/vitalinea" 
                demo="https://vitalinea-karoliquijada.netlify.app/"
                description="Vitalinea is a landing page built with React. Fully responsive. Mobile First."
                img={vitalinea}
            />          
        </section>
    )
}

export default Projects;
