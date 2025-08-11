import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const handwritingFont = "'Patrick Hand', cursive";

const Page = React.forwardRef(({ children, className = "" }, ref) => (
    <div
        ref={ref}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300
               border-4 border-gray-300 rounded-lg shadow-lg select-none
               p-8 text-center ${className}`}
        style={{
            userSelect: "none",
            height: "100%",
            width: "100%",
            fontFamily: handwritingFont,
            whiteSpace: "pre-line",
        }}
    >
        {children}
    </div>
));

export default function SimpleBook() {
    const bookRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
                <HTMLFlipBook
                    width={600}
                    height={800}
                    size="fixed"
                    showCover={true}
                    className="shadow-2xl rounded-xl"
                    ref={bookRef}
                    onFlip={(e) => setCurrentPage(e.data)}
                    flippingTime={600}
                >
                    {/* Page 1: Portfolio centered with role below */}
                    <Page key="cover-left" className="text-6xl font-bold text-blue-900">
                        <div className="flex flex-col justify-center h-full">
                            <span>Portfolio</span>
                            <span className="mt-4 text-3xl font-semibold text-blue-700">
                                MERN Stack Developer
                            </span>
                        </div>
                    </Page>

                    {/* Page 2: Name + role */}
                    <Page key="cover-right" className="text-6xl font-bold text-blue-900">
                        <div>
                            <div>Fahim Ahmed</div>
                            <div className="mt-2 text-3xl font-semibold text-blue-700">
                                Full Stack Web Developer
                            </div>
                        </div>
                    </Page>

                    {/* Page 3: Contact info */}
                    <Page key="page-3" className="text-xl text-black flex flex-col justify-between h-full">
                        <div>
                            <p>asifahmed55445@gmail.com | +880-1774433063</p>
                            <p className="mt-4">Savar, Dhaka, Bangladesh</p>
                            <p className="mt-4  text-blue-600">
                                LinkedIn : https://www.linkedin.com/in/-fahim-ahmed/ <br />
                                Github : https://github.com/fahimahmed420
                            </p>
                        </div>

                        {/* Signature image at the bottom */}
                        <div className="mt-8 flex justify-center">
                            <img
                                src="/Untitled.png"
                                alt="Signature of Fahim Ahmed"
                                className="w-48 h-auto object-contain"
                                style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.1))" }}
                            />
                        </div>
                    </Page>


                    {/* Page 4: Summary */}
                    <Page key="page-4" className="text-xl text-black">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-3 text-blue-900">
                                Summary
                            </h2>
                            <p>
                                Motivated and self-taught full stack web developer with strong
                                skills in responsive design, clean UI development, and backend
                                integration. Passionate about building impactful applications
                                and continuously expanding technical expertise. Actively seeking
                                a junior developer role or internship to grow professionally.
                            </p>
                        </div>
                    </Page>

                    {/* Page 5: Technical Skills */}
                    <Page key="page-5" className="text-xl text-black">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-3 text-blue-900">
                                Technical Skills
                            </h2>
                            <p>Languages: HTML, CSS, JavaScript</p>
                            <p>Frameworks & Libraries: React, Node.js, Express.js</p>
                            <p>Styling: Tailwind CSS, DaisyUI</p>
                            <p>Databases: MongoDB, Firebase</p>
                            <p>Tools & Platforms: Git, GitHub, VS Code, Netlify</p>
                            <p>Others: REST APIs, JWT, Framer Motion</p>

                            {/* Hand-drawn style SVG icons scattered randomly */}
                            <div className="relative w-full h-[320px] mt-6  select-none">
                                {/* Code brackets */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "20px", left: "15px", transform: "rotate(-10deg)" }}
                                >
                                    <path d="M16 18l6-6-6-6" />
                                    <path d="M8 6l-6 6 6 6" />
                                </svg>

                                {/* Database */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "100px", left: "130px", transform: "rotate(8deg)" }}
                                >
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5" />
                                </svg>

                                {/* Terminal */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "180px", left: "50px", transform: "rotate(5deg)" }}
                                >
                                    <polyline points="9 11 12 14 9 17" />
                                    <line x1="13" y1="19" x2="17" y2="19" />
                                </svg>

                                {/* Rocket */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "240px", left: "220px", transform: "rotate(-7deg)" }}
                                >
                                    <path d="M9 18v-6l12-2-3 6-9 2z" />
                                </svg>

                                {/* HTML5 Logo */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 452 520"
                                    fill="none"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "30px", left: "240px", transform: "rotate(-12deg)" }}
                                >
                                    <path
                                        d="M71 460L30 0h392l-40 460-156 44-155-44z"
                                        stroke="#000"
                                        strokeWidth="16"
                                        strokeLinejoin="round"
                                        fill="#E34F26"
                                    />
                                    <path
                                        d="M226 480l126-35 34-381H226"
                                        stroke="#fff"
                                        strokeWidth="16"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                    <path
                                        d="M226 208h-63l4 44h59v-44zM226 360l-1 1-68-18-5-56h-35l9 102 100 28 1-1v-44h-63z"
                                        fill="#fff"
                                    />
                                </svg>

                                {/* CSS3 Logo */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 452 520"
                                    fill="none"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "130px", left: "280px", transform: "rotate(7deg)" }}
                                >
                                    <path
                                        d="M71 460L30 0h392l-40 460-156 44-155-44z"
                                        stroke="#000"
                                        strokeWidth="16"
                                        strokeLinejoin="round"
                                        fill="#1572B6"
                                    />
                                    <path
                                        d="M226 480l126-35 34-381H226"
                                        stroke="#fff"
                                        strokeWidth="16"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                    <path
                                        d="M320 196h-83l4 44h75l-7 78-65 18-1 0-1 0-47-13-3-32h-44l8 90 102 28 1-1v-44h-63l-4-44h107l7-77-1-15z"
                                        fill="#fff"
                                    />
                                </svg>

                                {/* JavaScript Logo */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 630 630"
                                    fill="none"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "220px", left: "120px", transform: "rotate(-8deg)" }}
                                >
                                    <rect width="630" height="630" fill="#F7DF1E" />
                                    <path
                                        d="M423 492c-5 9-11 17-21 21-10 5-24 7-40 7-36 0-60-18-72-53l37-22c5 11 10 20 20 25 8 4 19 6 29 6 10 0 17-3 22-8 5-6 6-13 6-21 0-14-11-20-30-29l-10-4c-18-7-30-17-30-38 0-18 14-31 36-34 16-2 29 0 39 7l-25 38c-6-4-12-6-20-6-9 0-15 5-15 12 0 8 6 11 21 16l10 4c20 8 32 18 32 39 0 22-17 34-41 38-23 3-42 1-56-10l-13-11-25 15c10 20 29 36 60 39 35 3 61-17 72-52zM264 482c-4 7-9 13-17 16-7 4-18 6-32 6-28 0-47-15-47-39 0-15 7-25 27-35l10-5c13-6 21-13 21-26 0-13-10-22-27-22-15 0-26 7-34 19l-24-14c12-18 29-29 58-29 32 0 53 16 53 40 0 17-8 28-26 37l-9 5c-13 6-19 12-19 23 0 13 11 22 29 22 16 0 28-7 35-19l25 15z"
                                        fill="#000"
                                    />
                                </svg>

                                {/* MongoDB */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-green-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "40px", left: "350px", transform: "rotate(10deg)" }}
                                >
                                    <path d="M12 2s4 4 4 8-4 8-4 8-4-4-4-8 4-8 4-8z" />
                                    <path d="M12 10v8" />
                                    <path d="M14 10c-.5 2-2 3-2 3s-1.5-1-2-3" />
                                </svg>

                                {/* Firebase */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-yellow-500 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "180px", left: "320px", transform: "rotate(-5deg)" }}
                                >
                                    <path d="M12 2L6 14l3 8 7-14-4-6z" />
                                    <path d="M12 2l6 7-4 9" />
                                </svg>

                                {/* GitHub */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-gray-800 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "130px", left: "10px", transform: "rotate(7deg)" }}
                                >
                                    <path d="M12 2c-5 0-9 4-9 9 0 4 3 7 6 8v-3H9v-2h2v-2c0-2 2-2 2-2v2h2v2h-2v3c3-1 6-4 6-8 0-5-4-9-9-9z" />
                                </svg>

                                {/* VS Code */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-blue-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "250px", left: "300px", transform: "rotate(12deg)" }}
                                >
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>

                                {/* Tailwind CSS */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="70"
                                    height="70"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:stroke-teal-600 transition-colors duration-300 absolute cursor-pointer"
                                    style={{ top: "220px", left: "230px", transform: "rotate(-6deg)" }}
                                >
                                    <path d="M2 12c3-4 6-6 9-6s6 5 9 6" />
                                    <path d="M2 16c3-4 6-6 9-6s6 5 9 6" />
                                </svg>
                            </div>
                        </div>
                    </Page>



                    {/* Page 6: Education */}
                    <Page key="page-6" className="text-xl text-black">
                        <div>
                            <div className="flex justify-center">
                                <h2 className="font-bold text-2xl underline mb-3 text-blue-900 flex items-center space-x-3">
                                    {/* Hand-drawn graduation cap SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="inline-block"
                                    >
                                        <path d="M22 12l-10 6-10-6 10-6 10 6z" />  {/* The cap shape */}
                                        <path d="M2 12v4a8 8 0 0 0 20 0v-4" />    {/* The tassel/cord */}
                                        <path d="M12 6v6" />                        {/* The tassel string */}
                                    </svg>

                                    <span>Education</span>
                                </h2>
                            </div>

                            <p>BSc in Computer Science and Engineering</p>
                            <p>City University, Ashulia, Savar, Dhaka</p>
                            <p>2019 - 2024</p>

                            {/* Education Image with tape */}
                            <div className="relative inline-block mb-4">
                                {/* Tape - top left */}
                                <div className="absolute -top-3 -left-3 w-10 h-3 bg-gray-300 rotate-[-20deg] opacity-80 shadow-md"></div>
                                {/* Tape - top right */}
                                <div className="absolute -top-3 -right-3 w-10 h-3 bg-gray-300 rotate-[20deg] opacity-80 shadow-md"></div>
                                {/* Tape - bottom left */}
                                <div className="absolute -bottom-3 -left-3 w-10 h-3 bg-gray-300 rotate-[20deg] opacity-80 shadow-md"></div>
                                {/* Tape - bottom right */}
                                <div className="absolute -bottom-3 -right-3 w-10 h-3 bg-gray-300 rotate-[-20deg] opacity-80 shadow-md"></div>

                                {/* Image */}
                                <img
                                    src="/education-photo.jpg"
                                    alt="Education"
                                    className="rounded shadow-lg transform rotate-[1.5deg] w-96 h-auto"
                                />
                            </div>
                        </div>
                    </Page>


                    {/* Page 7: Certifications */}
                    <Page key="page-7" className="text-xl text-black">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-3 text-blue-900">
                                Certifications
                            </h2>

                            {/* freeCodeCamp Certificate */}
                            <div className="relative inline-block mb-4">
                                {/* Tape - top left */}
                                <div className="absolute -top-3 -left-3 w-10 h-3 bg-gray-300 rotate-[-20deg]"></div>
                                {/* Tape - top right */}
                                <div className="absolute -top-3 -right-3 w-10 h-3 bg-gray-300 rotate-[20deg]"></div>
                                {/* Tape - bottom left */}
                                <div className="absolute -bottom-3 -left-3 w-10 h-3 bg-gray-300 rotate-[20deg]"></div>
                                {/* Tape - bottom right */}
                                <div className="absolute -bottom-3 -right-3 w-10 h-3 bg-gray-300 rotate-[-20deg]"></div>

                                {/* Image */}
                                <img
                                    src="/freecodecamp-cert.PNG"
                                    alt="Responsive Web Design Certificate"
                                    className="rounded shadow-lg transform rotate-[-2deg] w-96 h-auto"
                                />
                            </div>
                            <p className="mb-6 font-semibold">
                                Responsive Web Design - freeCodeCamp (300 hours)
                            </p>

                            {/* Google Digital Garage Certificate */}
                            <div className="relative inline-block mb-4">
                                {/* Tape - top left */}
                                <div className="absolute -top-3 -left-3 w-10 h-3 bg-gray-300 rotate-[-20deg]"></div>
                                {/* Tape - top right */}
                                <div className="absolute -top-3 -right-3 w-10 h-3 bg-gray-300 rotate-[20deg]"></div>
                                {/* Tape - bottom left */}
                                <div className="absolute -bottom-3 -left-3 w-10 h-3 bg-gray-300 rotate-[20deg]"></div>
                                {/* Tape - bottom right */}
                                <div className="absolute -bottom-3 -right-3 w-10 h-3 bg-gray-300 rotate-[-20deg]"></div>

                                {/* Image */}
                                <img
                                    src="/google-digital-garage-cert.png"
                                    alt="Fundamentals of Digital Marketing Certificate"
                                    className="rounded shadow-lg transform rotate-[1.5deg] w-96 h-auto"
                                />
                            </div>
                            <p className="font-semibold">
                                Fundamentals of Digital Marketing - Google Digital Garage
                            </p>
                        </div>
                    </Page>


                    {/* Page 8: Freelancers Marketplace */}
                    <Page key="page-8" className="text-xl text-black text-left">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-4 text-blue-900 flex items-center space-x-2">
                                {/* Hand-drawn bag icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="inline-block"
                                >
                                    <path d="M6 7V5a4 4 0 0 1 8 0v2" />
                                    <rect x="3" y="7" width="18" height="14" rx="2" ry="2" />
                                    <path d="M16 11a4 4 0 0 1-8 0" />
                                </svg>

                                <span> Projects</span>
                            </h2>

                            <h3 className="font-semibold text-xl mb-1">(1) Freelancers Marketplace</h3>
                            <p><strong>Tech Stack:</strong> JavaScript, React, Vercel, Firebase</p>
                            <p>
                                Live: https://beautiful-tartufo-17dc98.netlify.app<br />
                                Source Code: https://github.com/yourusername/freelancers-marketplace
                            </p>
                            <p className="mt-2">
                                A fully responsive online marketplace where freelancers can showcase their services, and clients can browse, filter, and hire talent with a secure checkout system.
                            </p>
                            <ul className="list-none mt-1 space-y-1">
                                <li><span className="font-bold text-black mr-2">X</span>Homepage with service categories</li>
                                <li><span className="font-bold text-black mr-2">X</span>Browse & filter services</li>
                                <li><span className="font-bold text-black mr-2">X</span>Freelancer profile pages</li>
                                <li><span className="font-bold text-black mr-2">X</span>Cart & checkout functionality</li>
                            </ul>
                        </div>
                    </Page>


                    {/* Page 9: HotelEr */}
                    <Page key="page-9" className="text-xl text-black text-left">
                        <div>
                            <h3 className="font-semibold text-xl mb-1">(2) HotelEr</h3>
                            <p><strong>Tech Stack:</strong> React, Firebase, JavaScript, Node.js, MongoDB, Express</p>
                            <p>
                                Live: https://assignment-11-59a34.web.app<br />
                                Source Code: https://github.com/yourusername/hoteler
                            </p>
                            <p className="mt-2">
                                A feature-rich hotel booking platform with real-time availability, date filtering, and secure authentication. Designed with a mobile-first approach for speed and usability.
                            </p>
                            <ul className="list-none mt-1 space-y-1">
                                <li><span className="font-bold text-black mr-2">X</span>Room listing & details page</li>
                                <li><span className="font-bold text-black mr-2">X</span>Date-based room filtering</li>
                                <li><span className="font-bold text-black mr-2">X</span>Secure payment integration</li>
                                <li><span className="font-bold text-black mr-2">X</span>User dashboard for bookings</li>
                                <li><span className="font-bold text-black mr-2">X</span>Table reservation system</li>
                            </ul>
                        </div>
                    </Page>

                    {/* Page 10: EduManage */}
                    <Page key="page-10" className="text-xl text-black text-left">
                        <div>
                            <h3 className="font-semibold text-xl mb-1">(3) EduManage</h3>
                            <p><strong>Tech Stack:</strong> React, Firebase, JavaScript, Vercel, MongoDB, Node.js, Express, REST API</p>
                            <p>
                                Live: https://edumanage-d7a0d.web.app<br />
                                Source Code: https://github.com/yourusername/edumanage
                            </p>
                            <p className="mt-2">
                                A full-stack e-learning platform offering courses in web development, UI/UX design, and AI. Includes role-based access for instructors and students, course management, and real-time progress tracking.
                            </p>
                            <ul className="list-none mt-1 space-y-1">
                                <li><span className="font-bold text-black mr-2">X</span>Secure authentication & admin role</li>
                                <li><span className="font-bold text-black mr-2">X</span>Browse all classes & detailed course pages</li>
                                <li><span className="font-bold text-black mr-2">X</span>Integrated payment system</li>
                                <li><span className="font-bold text-black mr-2">X</span>Instructor dashboard (Add courses, manage students)</li>
                                <li><span className="font-bold text-black mr-2">X</span>Student dashboard (Track progress, submit assignments)</li>
                            </ul>
                            <p className="mt-3 font-semibold">
                                Admin Access:<br />
                                Email: admin123@gmail.com<br />
                                Password: Admin123
                            </p>
                        </div>
                    </Page>


                    {/* Page 11: Languages */}
                    <Page key="page-11" className="text-xl text-black">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-3 text-blue-900">
                                Languages
                            </h2>
                            <p>English - Professional</p>
                            <p>Bengali - Native</p>
                        </div>
                    </Page>

                </HTMLFlipBook>
            </div>
        </>
    );
}
