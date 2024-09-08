import { useState, useRef } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about"); // State to track the active tab
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]); // Array to hold uploaded images
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

  // Handle image selection
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Get the selected files
    const imageUrls = files.map((file) => URL.createObjectURL(file)); // Convert to URLs
    setImages((prevImages) => [...prevImages, ...imageUrls]); // Add the new images to the list
  };

  // Trigger file input click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Scroll to the next image
  // Scroll to next image set
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 3 ? prevIndex + 3 : 0
    );
  };
  // Scroll to previous image set
  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 3 : Math.max(0, images.length - 3)
    );
  };
  return (
    <div className="bg-gray-900 h-screen">
      <div className="flex h-3/4  p-6">
        {/* Left half empty */}
        <div class="w-1/2 rounded-[27px] border border-[#96BEE7] bg-[#616161D1] mt-10 lg:mt-0 mr-4 lg:mr-8"></div>

        {/* Right side with widgets */}
        <div className="w-1/2 space-y-6">
          {/* First widget */}
          <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
            <div className="h-[56px] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
              <div
                onClick={() => setActiveTab("about")}
                className={`rounded-xl px-[55px] h-[40px] flex justify-center items-center ml-2 hover:cursor-pointer ${
                  activeTab === "about"
                    ? "bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]"
                    : "text-[#b4aeae] hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
              >
                About Me
              </div>
              <div
                onClick={() => setActiveTab("experiences")}
                className={`rounded-xl px-[54px] h-[40px] flex justify-center items-center ml-2 hover:cursor-pointer ${
                  activeTab === "experiences"
                    ? "bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]"
                    : "text-[#b4aeae] hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
              >
                Experiences
              </div>
              <div
                onClick={() => setActiveTab("recommended")}
                className={`rounded-xl px-[48px] h-[40px] flex justify-center items-center ml-2 mr-2 hover:cursor-pointer ${
                  activeTab === "recommended"
                    ? "bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]"
                    : "text-[#b4aeae] hover:bg-[#28292F] hover:duration-500 hover:ease-in-out"
                }`}
              >
                Recommended
              </div>
            </div>
            <div class="flex gap-4 p-2 ml-2.5">
              <div className="mt-5">
                <img
                  src="data:image/svg+xml,%3csvg%20width='68'%20height='96'%20viewBox='0%200%2024%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3c/svg%3e"
                  alt=""
                />
              </div>
              <div className="mt-4 text-gray-400">
                {activeTab === "about" && (
                  <div>
                    <p>
                      I'm Nidh, a Web Developer & Competitive Coder. Web
                      Developer & Competitive Coder with a passion for crafting
                      innovative and efficient solutions. Proficient in
                      front-end and back-end technologies, I specialize in
                      creating dynamic and user-friendly web applications.
                      Experienced in responsive design, I ensure seamless
                      experiences across devices. Adept at leveraging modern
                      frameworks and libraries to enhance functionality and
                      scalability.
                    </p>
                  </div>
                )}
                {activeTab === "experiences" && (
                  <div>
                    <p>
                      I'm Nidh, a Web Developer & Competitive Coder. Web
                      Developer & Competitive Coder with a passion for crafting
                      innovative and efficient solutions. Proficient in
                      front-end and back-end technologies, I specialize in
                      creating dynamic and user-friendly web applications.
                      Experienced in responsive design, I ensure seamless
                      experiences across devices. Adept at leveraging modern
                      frameworks and libraries to enhance functionality and
                      scalability.
                    </p>
                  </div>
                )}

                {activeTab === "recommended" && (
                  <div>
                    <p>
                      I'm Nidh, a Web Developer & Competitive Coder. Web
                      Developer & Competitive Coder with a passion for crafting
                      innovative and efficient solutions. Proficient in
                      front-end and back-end technologies, I specialize in
                      creating dynamic and user-friendly web applications.
                      Experienced in responsive design, I ensure seamless
                      experiences across devices. Adept at leveraging modern
                      frameworks and libraries to enhance functionality and
                      scalabilit
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div class="w-full h-[4%] flex justify-center items-center flex-col">
            <div class="w-[85%] bg-[#363C43] h-[4px] rounded-full"></div>
            <div class="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-sm"></div>
          </div>

          {/* Gallery widget */}
          <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
            {/* Header section */}
            <div className="p-4 flex gap-4">
              {/* SVG Icon */}
              <div>
                <img
                  src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3846%2018C13.3846%2018.2738%2013.3034%2018.5415%2013.1513%2018.7692C12.9991%2018.9969%2012.7829%2019.1744%2012.5299%2019.2792C12.2769%2019.384%20111.9985%2019.4114%20111.7299%2019.358C11.4613%2019.3046%2011.2146%2019.1727%2011.0209%2018.9791C10.8273%2018.7854%2010.6954%2018.5387%2010.642%2018.2701C10.5886%2018.0015%2010.616%2017.7231%2010.7208%2017.4701C10.8256%2017.2171%2011.0031%2017.0009%2011.2308%2016.8487C11.4585%2016.6966%2011.7262%2016.6154%2012%2016.6154C12.3672%2016.6154%2012.7194%2016.7613%2012.9791%2017.0209C13.2387%2017.2806%2013.3846%2017.6328%2013.3846%2018ZM12%205.53846C9.45462%205.53846%207.38462%207.40192%207.38462%209.69231V10.1538C7.38462%2010.3987%207.48187%2010.6334%207.65498%2010.8066C7.82809%2010.9797%208.06288%2011.0769%208.3077%2011.0769C8.55251%2011.0769%208.7873%2010.9797%208.96041%2010.8066C9.13352%2010.6334%209.23077%2010.3987%209.23077%2010.1538V9.69231C9.23077%208.42308%2010.4735%207.38461%2012%207.38461C13.5265%207.38461%2014.7692%208.42308%2014.7692%209.69231C14.7692%2010.9615%2013.5265%2012%2012%2012C11.7552%2012%2011.5204%2012.0972%2011.3473%2012.2704C11.1742%2012.4435%2011.0769%2012.6783%2011.0769%2012.9231V13.8462C11.0769%2014.091%2011.1742%2014.3258%2011.3473%2014.4989C11.5204%2014.672%2011.7552%2014.7692%2012%2014.7692C12.2448%2014.7692%2012.4796%2014.672%2012.6527%2014.4989C12.8258%2014.3258%2012.9231%2014.091%2012.9231%2013.8462V13.7631C15.0277%2013.3765%2016.6154%2011.6977%2016.6154%209.69231C16.6154%207.40192%2014.5454%205.53846%2012%205.53846ZM24%2012C24%2014.3734%2023.2962%2016.6934%2021.9776%2018.6668C20.6591%2020.6402%2018.7849%2022.1783%2016.5922%2023.0865C14.3995%2023.9948%2011.9867%2024.2324%209.65892%2023.7694C7.33115%2023.3064%205.19295%2022.1635%203.51472%2020.4853C1.83649%2018.807%200.693605%2016.6689%200.230582%2014.3411C-0.232441%2012.0133%200.00519941%209.60051%200.913451%207.4078C1.8217%205.21508%203.35977%203.34094%205.33316%202.02236C7.30655%200.703788%209.62663%200%2012%200C15.1816%200.00335979%2018.2319%201.26872%2020.4816%203.51843C22.7313%205.76814%2023.9966%208.81843%2024%2012ZM22.1538%2012C22.1538%209.99176%2021.5583%208.02861%2020.4426%206.35882C19.3269%204.68903%2017.7411%203.38759%2015.8857%202.61907C14.0303%201.85055%2011.9887%201.64947%2010.0191%202.04126C8.04943%202.43305%206.24019%203.40011%204.82015%204.82015C3.40011%206.24019%202.43305%208.04943%202.04126%2010.0191C1.64947%2011.9887%201.85055%2014.0303%202.61907%2015.8857C3.38759%2017.7411%204.68904%2019.3269%206.35883%2020.4426C8.02862%2021.5583%209.99176%2022.1538%2012%2022.1538C14.692%2022.1508%2017.2729%2021.08%2019.1765%2019.1765C21.08%2017.2729%2022.1508%2014.692%2022.1538%2012Z'%20fill='url(%23paint0_linear_2267_3329)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2267_3329'%20x1='19.5'%20y1='27.5'%20x2='3.5'%20y2='2'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234A4E54'/%3e%3cstop%20offset='1'%20stop-color='%23A3ADBA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                  alt=""
                />
              </div>

              {/* Main Content */}
              <div className="w-full flex justify-between items-center">
                {/* Gallery Button */}
                <div>
                  <button className="h-[90%] bg-[#171717] px-8 py-3 rounded-2xl text-white text-lg shadow-inner shadow-black font-medium">
                    Gallery
                  </button>
                </div>

                {/* Add Image Section */}
                <div className="flex gap-4 px-4">
                  {/* Add Image Button */}
                  <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
                    <button
                      onClick={handleButtonClick}
                      className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="w-[10px] mb-[1.4px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                      </svg>
                      ADD IMAGE
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      multiple
                      onChange={handleImageChange}
                    />
                    {/* Display the selected image */}
                  </div>

                  {/* carosal Additional Buttons */}

                  <div className="flex gap-3 text-[#6F787C] px-2">
                    {/* Button 1 */}

                    <div className="rounded-full shadow-[0px_0px_20px_6px_#6a8897] active:scale-[0.8] z-0">
                      <button
                        onClick={handlePreviousImage}
                        className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-[2px_8px_22px_5px_black]"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Button 2 */}
                    <div className="rounded-full shadow-[0px_0px_20px_6px_#6a8897] active:scale-[0.8] z-0">
                      <button
                        onClick={handleNextImage}
                        className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-[2px_8px_22px_5px_black]"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex gap-4 p-2 ml-2.5">
              {/* SVG Icon */}
              <div className="mt-5 w-[19px]">
                <img
                  src="data:image/svg+xml,%3csvg%20width='68'%20height='96'%20viewBox='0%200%2024%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='10.6879'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3crect%20x='10.6878'%20y='21.3756'%20width='9.31217'%20height='9.31217'%20rx='1.16402'%20fill='%234A4E54'/%3e%3c/svg%3e"
                  alt=""
                />
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
                {/* Image 1 */}
                <div className="relative">
                  <img
                    src="/Rectangle 5160.jpg"
                    className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25"
                    alt="Image 1"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative">
                  <img
                    src="/Rectangle 5160.jpg"
                    className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25"
                    alt="Image 2"
                  />
                </div>

                {/* Image 3 */}
                <div className="relative">
                  <img
                    src="/Rectangle 5160.jpg"
                    className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25"
                    alt="Image 3"
                  />
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="flex gap-4 p-2 ml-2.5">
              <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
                {images
                  .slice(currentIndex, currentIndex + 3)
                  .map((image, index) => (
                    <div className="relative" key={index}>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:-rotate-[2deg]"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[4%] flex justify-center items-center flex-col">
            <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full"></div>
            <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
