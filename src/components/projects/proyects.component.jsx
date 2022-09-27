import './projects.styles.scss'
import Project from '../project/project.component';


const Projects = ({ title='title'}) => {
    return (
        <section>
            <h2 className='section-title'>Projects</h2>
            <Project/>          
        </section>
    )
}

export default Projects;