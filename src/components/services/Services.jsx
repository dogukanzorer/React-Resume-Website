import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";



const Services = () => {
  return (
    <section id='services'> 
    <h2>Project Experience</h2>

    <div className="container services__container">
      <article className="service">
      <div className='content'>
          <a href='https://github.com/dogukanzorer/JavaReactFrontendPart'><IoShareSocialSharp className='fafa' /></a>
        </div>
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
        <br/>
      </article>
          {/* END OF UI/UX */}

          <article className="service">
          <div className='content'>
          <a href='https://github.com/dogukanzorer/multi-layered-architecture'><IoShareSocialSharp className='fafa' /></a>
        </div>
        <div className="service__head">
          <h3>CRM Customer Relationship Management (Intern project) </h3>
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
            
            <p className='special2'>This project contributed to a CRM system using C# in the .NET ecosystem. Technologies included C#, SQL, PostgreSQL, Entity Framework, AutoFac, Fluent Validation, and JWT for security. The design featured layered structures, Aspect-Oriented Programming (AOP), and Inversion of Control (IoC) with AutoFac. Fluent Validation ensured meticulous data validation. JSON Web Tokens (JWT) were implemented for robust authentication. API communication was rigorously tested with Postman. Database operations utilized both SQL and PostgreSQL. Microservices were designed and implemented using C#, ASP.NET, and associated frameworks for improved modularity and scalability.</p>
          </li>
        </ul>
        <br/>
        
      </article>
          {/* END OF WEB DEVELOP */}


      <article className="service">
      <div className='content'>
          <a href='https://github.com/dogukanzorer/AutoRepair-MERN-Backend'><IoShareSocialSharp className='fafa' /></a>
        </div>
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

          <article className="service">
      <div className='content'>
          <a href='https://github.com/dogukanzorer/ReactWithNodejsSocialMedia'><IoShareSocialSharp className='fafa' /></a>
        </div>
        <div className="service__head">
          
          <h3> Simple Social Media Application </h3>
        </div>
        <ul className='service__list'> 
        
        
        <li>    
            <p className='special3'>•	TOOL-KIT: (MERN) MongoDb, Express.js, React, Node.js</p>
          </li>
          <li>
            <p className='special3'>•	Description: This project encompasses a social media application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. Users can register and log in to the application, where they can share their content on the homepage. The application ensures secure session management through a JWT (JSON Web Token) based user authentication system.</p>
          </li>
          <li>
            
            <p className='special3'>•	Features: User registration and login.JWT-based authentication.View user posts on the homepage.Post sharing and commenting.</p>
          </li>
          <li>
            
            <p className='special3'>•	Dependencies: cors: Provides Cross-Origin Resource Sharing (CORS) support. <br/> jsonwebtoken: Generates and verifies JWTs for secure authentication. <br/>mongoose: An Object Data Modeling (ODM) library for interacting with MongoDB. <br/> multer: Middleware used for file upload operations. <br/> uuid: Used for generating unique identifiers.</p>
          </li>
         
          
            
        </ul>
       
      </article>
      {/* END OF Content Creation */}

      <article className="service">
      <div className='content'>
          <a href='https://github.com/dogukanzorer/WeatherApp'><IoShareSocialSharp className='fafa' /></a>
        </div>
        <div className="service__head">
          
          <h3> Weather Application </h3>
        </div>
        <ul className='service__list'> 
        
        
        <li>    
            <p className='special3'>•	This React-based weather application allows users to discover real-time weather information by entering countries and cities worldwide. Integrated with WeatherAPI, the application stands out with its simple interface and user-friendly design.</p>
          </li>
          <br/>
          <li>
            <p className='special3'>•	User-friendly interface: Provides a simple and effective user experience. <br/> Real-time weather information: Delivers current weather data for user-inputted countries or cities. <br/> API integration: Fetches weather information instantly using WeatherAPI. <br/> React components: Offers a customizable structure with modular and reusable components.</p>
          </li>
          <br/>
          
          <li>
            
            <p className='special3'>•	This weather application provides a practical solution for users planning travels or seeking daily weather information in a fast and convenient manner. Learning the weather has never been this enjoyable!</p>
          </li>
          
         
          
            
        </ul>
       
      </article>

    </div>
    
     </section>
  )
}

export default Services