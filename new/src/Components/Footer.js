import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      
        
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gaveen-buddhika-a41159257/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/gaveen-buddhika-a41159257/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/GaveenBuddhika"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Design by Gaveen Buddhika. Copyright 2024. All Rights Reserved.</p>
          
      
    </footer>
  )
}
