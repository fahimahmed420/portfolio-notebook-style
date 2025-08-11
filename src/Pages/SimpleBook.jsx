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
                    <Page key="page-3" className="text-xl text-black">
                        <div>
                            <p>asifahmed55445@gmail.com | +880-1774433063</p>
                            <p className="mt-4">Savar, Dhaka, Bangladesh</p>
                            <p className="mt-4 underline cursor-pointer text-blue-600">
                                LinkedIn Profile
                            </p>
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
                        </div>
                    </Page>

                    {/* Page 6: Education */}
                    <Page key="page-6" className="text-xl text-black">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-3 text-blue-900">
                                Education
                            </h2>
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


                    {/* Page 8: Projects & Experience */}
                    <Page key="page-8" className="text-xl text-black">
                        <div>
                            <h2 className="font-bold text-2xl underline mb-3 text-blue-900">
                                Projects
                            </h2>
                            <p>EduManage</p>
                            <p className="underline cursor-pointer text-blue-600">
                                edumanage-d7a0d.web.app
                            </p>
                            <p className="mt-3">HotelEr</p>
                            <p className="underline cursor-pointer text-blue-600">
                                assignment-11-59a34.web.app
                            </p>
                            <p className="mt-3">Freelance Excellence Marketplace</p>
                            <p className="underline cursor-pointer text-blue-600">
                                beautiful-tartufo-17dc98.netlify.app
                            </p>
                            <h2 className="font-bold text-2xl underline mt-8 mb-3 text-blue-900">
                                Experience
                            </h2>
                            <p>
                                Currently no formal job experience - open to internships and
                                entry-level development roles. Actively working on personal
                                projects to build practical skills.
                            </p>
                        </div>
                    </Page>

                    {/* Page 9: Languages */}
                    <Page key="page-9" className="text-xl text-black">
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
