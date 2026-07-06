import styles from './course.module.css';

const course = "REACTJS";



function Course() {
    return (
        <div className={styles.card}>  
            <img src=""alt=""/>
            <h3>{course}</h3>
            <p>This is React webpage</p>
            </div>
    );
}
export default Course;