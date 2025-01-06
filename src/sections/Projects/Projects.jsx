import styles from './ProjectsStyles.module.css'
import WeatherApp from '../../assets/WeatherApp.png'
import Portfolio from '../../assets/portfolio.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                    src={WeatherApp} 
                    link="https://github.com/thaivinhle/Weather-App"
                    h3="WeatherApp"
                    p="Web Application using Weather API"
                />
                <ProjectCard 
                    src={Portfolio} 
                    link="https://github.com/thaivinhle/thai-le"
                    h3="Portfolio"
                    p="Personal Portfolio Website (Current Website)"
                />
            </div>
        </section>
    )
}
export default Projects