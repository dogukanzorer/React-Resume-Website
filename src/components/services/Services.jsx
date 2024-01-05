import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";


const Services = () => {
  return (
    <section id='services'> 
    <h2>Project Experience</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Simple E-Commerce</h3>
        </div>
        <ul className='service__list'>
          <li>
            
            <p>•	Backend : Java spring boot , Spring Data JPA , Restful API , Lombok </p>
          </li>
          <li>
            
            <p>•	Frontend : HTML , CSS , JavaScript , React , Redux , Axios  </p>
          </li>
          <li>
            
            <p>•	Database : Postgre SQL</p>
          </li>
          <li>
            
            <p>•	Tools and Packages : Maven , Postman , Swagger , Github , Docker</p>
          </li>
          <li>
            
            <p className='special'> Actively participated in both backend and frontend development, designing and implementing RESTful services. Integrated Spring Security and JWT for user session management and authorization. Database design and management, implementing performance enhancements using PostgreSQL. Frontend development using React, utilizing Redux for state management. Developed test scenarios using Postman and Jest during project testing phases. Effective communication and collaboration within the team throughout the project duration.</p>
          </li>
        </ul>
      </article>
          {/* END OF UI/UX */}

          <article className="service">
        <div className="service__head">
          <h3>CRM Customer Relationship Management </h3>
        </div>
        <ul className='service__list'>
          <li>
            
            <p>•	Technologies: C#, SQL, PostgreSQL, Entity Framework, Auto fac, Fluent Validation, JWT.</p>
          </li>
          <li>
            
            <p>•	Design: Implemented Layered Architectures, AOP, and IOC with Auto fac.</p>
          </li>
          <li>
            
            <p>•	ToolKit: Visual Studio, Postman, Docker</p>
          </li>
          <li>
            
            <p className='special2'>This project involved active contributions to a Customer Relationship Management (CRM) system, leveraging C# within the .NET ecosystem. The technological stack encompassed C#, SQL, PostgreSQL, Entity Framework, AutoFac, Fluent Validation, and JWT for security. The design architecture was implemented with a focus on layered structures, Aspect-Oriented Programming (AOP), and Inversion of Control (IoC) using AutoFac. Fluent Validation was employed for meticulous data validation, ensuring the integrity of information. Security measures included the implementation of JSON Web Tokens (JWT) for robust authentication. The application's API communication was thoroughly tested using Postman. Database operations were conducted using both SQL and PostgreSQL. Additionally, the project involved the design and implementation of microservices, utilizing C#, ASP.NET, and associated frameworks to enhance modularity and scalability within the system.</p>
          </li>
        </ul>
        
      </article>
          {/* END OF WEB DEVELOP */}


          <article className="service">
        <div className="service__head">
          <h3>AUTO-REPAİR (MERN) </h3>
        </div>
        <ul className='service__list'> 
        
        <li>    
            <p className='special3'>•	TOOL-KIT: (MERN) MongoDb, Express.js, React, Node.js</p>
          </li>
          <li>
            <p className='special3'>•	Security: User authentication is implemented using tools like JSON Web Token (JWT) and bcrypt.Express.js middleware manages user authentication processes.</p>
          </li>
          <li>
            
            <p className='special3'>•	User-Friendly Interface: The minimalist and user-friendly design enables vehicle owners to easily perform tasks such as appointment scheduling and service tracking.</p>
          </li>
          <li>
            
            <p className='special3'>•	Appointment Management: Users can effortlessly schedule appointments for vehicle maintenance and repairs by selecting suitable dates and times.</p>
          </li>
         
          <li>
            <p className='special3'>•	the Car Repair Appointment Application. It highlights its modern and user-friendly platform, development using the MERN stack, and its functionality as a centralized hub for scheduling appointments, communicating with mechanics, and tracking service history.</p>
          </li>
        </ul>
      </article>
          {/* END OF Content Creation */}

    </div>
    
     </section>
  )
}

export default Services