import React, { useContext, useRef, useState } from 'react'
import LinksContext from '../../context/linksContext'
import { useRouter } from 'next/navigation'
import PrevieuwContext from '../../context/previeuwContext'
import Image from 'next/image'


function ProfilDetails({setUserEmail, setUserFirstName, setUserLastName, setPart, setSelectedFile, selectedFile}) {
  const linksInTheApp = useContext(LinksContext)
  //const [selectedFile, setSelectedFile] = useState(null)
  const router = useRouter()
  const fileInputRef = useRef(null);
  const previeuwInfos = useContext(PrevieuwContext)
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  function LinksContainer() {
    const MAX_DIVS = 5; 
  
    return (
      <div className='linksContainerDiv'>
        <div className="underLinksContainerDiv">
          <div className={`popContainer ${selectedFile && "popContainerFiled"}`}>
            {selectedFile && <Image src={selectedFile} width={96} height={96} alt='picture profile' style={{ borderRadius: '96px' }}/>}
          </div>
          <div className={`${previeuwInfos.userFirstName !== "" || previeuwInfos.userLastName !== "" ? "noTextContainer" : "textContainer"}`}>
            <p>{previeuwInfos.userFirstName} {previeuwInfos.userLastName}</p>
          </div>
          <div className={`${previeuwInfos.userEmail !== "" ? "noLittleTextContainer" : "littleTextContainer"}`}>
            <p>{previeuwInfos.userEmail}</p>
          </div>
          <div className="linksInTheContainer">
            {linksInTheApp.slice(0, MAX_DIVS).map((link, index) => (
              <div key={index} className='linkInTheContainer'>
                <div className={
                  linksInTheApp[index] === "GitHub"
                  ? "githubInThePhone"
                  : linksInTheApp[index] === "YouTube"
                  ? "youtubeInThePhone"
                  : linksInTheApp[index] === "Facebook"
                  ? "facebookInThePhone"
                  : linksInTheApp[index] === "Linkedin"
                  ? "linkedinInThePhone"
                  : linksInTheApp[index] === "Frontend Mentor"
                  ? "frontendmentorInThePhone"
                  : "none"
                }>
                  <div className={
                  linksInTheApp[index] === "GitHub"
                  ? "githubInThePhoneLeft"
                  : linksInTheApp[index] === "YouTube"
                  ? "youtubeInThePhoneLeft"
                  : linksInTheApp[index] === "Facebook"
                  ? "facebookInThePhoneLeft"
                  : linksInTheApp[index] === "Linkedin"
                  ? "linkedinInThePhoneLeft"
                  : linksInTheApp[index] === "Frontend Mentor"
                  ? "frontendmentorInThePhoneLeft"
                  : "none"                   
                  }>
                  {
                  linksInTheApp[index] === "GitHub"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                  <path d="M8.98187 1.28805C7.67799 0.985074 6.32201 0.985074 5.01813 1.28805C4.26507 0.826185 3.69013 0.613919 3.272 0.524319C3.09354 0.484042 2.91093 0.465065 2.728 0.467785C2.64476 0.470041 2.56192 0.48004 2.48053 0.497652L2.46987 0.499785L2.4656 0.501919H2.4624L2.60853 1.01499L2.4624 0.502985C2.38746 0.524162 2.31807 0.561492 2.2591 0.612353C2.20013 0.663213 2.15302 0.72637 2.12107 0.797385C1.80637 1.50214 1.74642 2.29436 1.95147 3.03845C1.42041 3.68203 1.13101 4.49099 1.13333 5.32539C1.13333 6.98192 1.62187 8.09552 2.45493 8.81125C3.0384 9.31259 3.74667 9.57925 4.45707 9.73179C4.34527 10.0601 4.30313 10.4081 4.33333 10.7537V11.3915C3.8992 11.4822 3.5984 11.4534 3.384 11.383C3.11627 11.2945 2.9104 11.1163 2.71307 10.8603C2.60991 10.7223 2.51379 10.5792 2.42507 10.4315L2.36427 10.3323C2.28749 10.2047 2.20783 10.0788 2.12533 9.95472C1.92267 9.65499 1.62187 9.27952 1.13547 9.15152L0.6192 9.01605L0.348267 10.0486L0.864533 10.1841C0.949867 10.2054 1.0608 10.2854 1.2432 10.5531C1.31341 10.6588 1.38098 10.7662 1.44587 10.8753L1.5184 10.9926C1.61867 11.1547 1.73387 11.3339 1.8672 11.5089C2.13707 11.8609 2.50507 12.2161 3.0512 12.3963C3.42453 12.5201 3.84907 12.5499 4.33333 12.4753V14.4667C4.33333 14.6082 4.38952 14.7438 4.48954 14.8438C4.58956 14.9439 4.72522 15.0001 4.86667 15.0001H9.13333C9.27478 15.0001 9.41044 14.9439 9.51046 14.8438C9.61048 14.7438 9.66667 14.6082 9.66667 14.4667V10.6662C9.66667 10.3302 9.65173 10.0219 9.5568 9.73499C10.264 9.58565 10.9669 9.31899 11.5472 8.81765C12.3792 8.09659 12.8667 6.97232 12.8667 5.30619V5.30512C12.864 4.47756 12.5745 3.67652 12.0475 3.03845C12.2523 2.2947 12.1923 1.50289 11.8779 0.798452C11.8462 0.727352 11.7993 0.664058 11.7405 0.613014C11.6817 0.561971 11.6124 0.524415 11.5376 0.502985L11.3915 1.01499C11.5376 0.502985 11.5365 0.502985 11.5355 0.502985L11.5333 0.501919L11.5291 0.499785L11.5195 0.497652C11.4931 0.490802 11.4664 0.48546 11.4395 0.481652C11.3836 0.473499 11.3273 0.468868 11.2709 0.467785C11.088 0.465085 10.9054 0.484061 10.7269 0.524319C10.3099 0.613919 9.73493 0.826185 8.98187 1.28805Z" fill="white"/>
                </svg>
                  : linksInTheApp[index] === "YouTube"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8.16265 2.66675C8.51865 2.66875 9.40931 2.67741 10.356 2.71541L10.692 2.73008C11.6446 2.77475 12.5966 2.85208 13.0693 2.98341C13.6993 3.16075 14.194 3.67675 14.3613 4.33141C14.628 5.37141 14.6613 7.39942 14.6653 7.89075L14.666 7.99208V8.10808C14.6613 8.59941 14.628 10.6281 14.3613 11.6674C14.192 12.3241 13.6966 12.8407 13.0693 13.0154C12.5966 13.1467 11.6446 13.2241 10.692 13.2687L10.356 13.2841C9.40931 13.3214 8.51865 13.3307 8.16265 13.3321L8.00598 13.3327H7.83598C7.08265 13.3281 3.93198 13.2941 2.92931 13.0154C2.29998 12.8381 1.80465 12.3221 1.63731 11.6674C1.37065 10.6274 1.33731 8.59941 1.33331 8.10808V7.89075C1.33731 7.39942 1.37065 5.37075 1.63731 4.33141C1.80665 3.67475 2.30198 3.15808 2.92998 2.98408C3.93198 2.70475 7.08331 2.67075 7.83665 2.66675H8.16265ZM6.66598 5.66675V10.3334L10.666 8.00008L6.66598 5.66675Z" fill="white"/>
                </svg>
                  : linksInTheApp[index] === "Facebook"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_86_26460)">
                    <path d="M19.9996 10.061C19.9996 4.50354 15.5221 -0.00146484 9.99957 -0.00146484C4.47457 -0.000214844 -0.00292969 4.50354 -0.00292969 10.0623C-0.00292969 15.0835 3.65457 19.246 8.43457 20.001V12.9698H5.89707V10.0623H8.43707V7.84354C8.43707 5.32229 9.93082 3.92979 12.2146 3.92979C13.3096 3.92979 14.4533 4.12604 14.4533 4.12604V6.60104H13.1921C11.9508 6.60104 11.5633 7.37729 11.5633 8.17354V10.061H14.3358L13.8933 12.9685H11.5621V19.9998C16.3421 19.2448 19.9996 15.0823 19.9996 10.061Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_86_26460">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                  : linksInTheApp[index] === "Linkedin"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z" fill="white"/>
                </svg>
                  : linksInTheApp[index] === "Frontend Mentor"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                  <path d="M21.6905 10.4854C21.5943 10.4854 21.4992 10.4653 21.4112 10.4262L15.5545 7.80353C15.4344 7.74955 15.3325 7.66202 15.2609 7.55146C15.1894 7.44091 15.1514 7.31204 15.1514 7.18037C15.1514 7.0487 15.1894 6.91983 15.2609 6.80928C15.3325 6.69872 15.4344 6.61119 15.5545 6.55722L21.4112 3.9436C21.5766 3.87021 21.7642 3.86529 21.9332 3.9299C22.1021 3.99451 22.2386 4.12341 22.3128 4.28839C22.3861 4.45382 22.3909 4.64158 22.3261 4.81054C22.2613 4.97951 22.1322 5.11592 21.9671 5.18991L17.5049 7.18128L21.968 9.17992C22.1107 9.24355 22.2273 9.35424 22.2982 9.49348C22.3691 9.63272 22.39 9.79208 22.3575 9.94493C22.325 10.0978 22.2411 10.2348 22.1197 10.3332C21.9983 10.4316 21.8468 10.4853 21.6905 10.4854Z" fill="#67BECE"/>
                  <path d="M13.7087 20C7.26973 20 1.64041 15.6534 0.0220298 9.42916C-0.0235705 9.25412 0.00223218 9.06813 0.0937616 8.91211C0.185291 8.75609 0.33505 8.64283 0.510092 8.59723C0.685134 8.55162 0.871122 8.57743 1.02714 8.66896C1.18316 8.76049 1.29643 8.91024 1.34203 9.08529C2.05596 11.8212 3.65733 14.243 5.89524 15.9712C8.13315 17.6995 10.8811 18.6365 13.7087 18.6355C13.8896 18.6355 14.0632 18.7074 14.1911 18.8353C14.3191 18.9633 14.391 19.1368 14.391 19.3178C14.391 19.4987 14.3191 19.6723 14.1911 19.8002C14.0632 19.9282 13.8896 20 13.7087 20Z" fill="#3F54A3"/>
                  <path d="M11.3581 14.3344C11.1771 14.3344 11.0036 14.2625 10.8756 14.1345C10.7477 14.0066 10.6758 13.833 10.6758 13.6521V0.682286C10.6758 0.501333 10.7477 0.32779 10.8756 0.199837C11.0036 0.0718835 11.1771 0 11.3581 0C11.539 0 11.7126 0.0718835 11.8405 0.199837C11.9685 0.32779 12.0404 0.501333 12.0404 0.682286V13.6521C12.0404 13.833 11.9685 14.0066 11.8405 14.1345C11.7126 14.2625 11.539 14.3344 11.3581 14.3344Z" fill="#67BECE"/>
                </svg>
                  : "none" 
                  }
                  <p>{linksInTheApp[index]}</p>
                  </div>
                  {linksInTheApp[index] !== "Frontend Mentor" ? <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.66666 7.3333V8.66664H10.6667L6.99999 12.3333L7.94666 13.28L13.2267 7.99997L7.94666 2.71997L6.99999 3.66664L10.6667 7.3333H2.66666Z" fill="white"/>
                  </svg> : <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.66699 7.33355V8.66688H10.667L7.00033 12.3335L7.94699 13.2802L13.227 8.00022L7.94699 2.72021L7.00033 3.66688L10.667 7.33355H2.66699Z" fill="#737373"/>
                  </svg>}
                </div>
              </div>
            ))}
            {linksInTheApp.length < MAX_DIVS && (
              Array.from({ length: MAX_DIVS - linksInTheApp.length }).map((_, index) => (
                <div key={linksInTheApp.length + index} className='linkInTheContainer'></div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>
    <LinksContainer />
    <form className='profilDetails'>
      <h1>Profil Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>
      <div className="profilDetailsCenter">
        <p>Profil Picture</p>

        <div className="downloadProfilPicture" onClick={handleFileInputClick}>
          <input type="file" accept='image/*' ref={fileInputRef} onChange={handleImageChange} />
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M33.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V31.25C3.75 31.913 4.01339 32.5489 4.48223 33.0178C4.95107 33.4866 5.58696 33.75 6.25 33.75H33.75C34.413 33.75 35.0489 33.4866 35.5178 33.0178C35.9866 32.5489 36.25 31.913 36.25 31.25V8.75C36.25 8.08696 35.9866 7.45107 35.5178 6.98223C35.0489 6.51339 34.413 6.25 33.75 6.25ZM33.75 8.75V24.8047L29.6766 20.7328C29.4444 20.5006 29.1688 20.3164 28.8654 20.1907C28.5621 20.0651 28.2369 20.0004 27.9086 20.0004C27.5802 20.0004 27.2551 20.0651 26.9518 20.1907C26.6484 20.3164 26.3728 20.5006 26.1406 20.7328L23.0156 23.8578L16.1406 16.9828C15.6718 16.5143 15.0362 16.2512 14.3734 16.2512C13.7107 16.2512 13.075 16.5143 12.6062 16.9828L6.25 23.3391V8.75H33.75ZM6.25 26.875L14.375 18.75L26.875 31.25H6.25V26.875ZM33.75 31.25H30.4109L24.7859 25.625L27.9109 22.5L33.75 28.3406V31.25ZM22.5 15.625C22.5 15.2542 22.61 14.8916 22.816 14.5833C23.022 14.275 23.3149 14.0346 23.6575 13.8927C24.0001 13.7508 24.3771 13.7137 24.7408 13.786C25.1045 13.8584 25.4386 14.037 25.7008 14.2992C25.963 14.5614 26.1416 14.8955 26.214 15.2592C26.2863 15.6229 26.2492 15.9999 26.1073 16.3425C25.9654 16.6851 25.725 16.978 25.4167 17.184C25.1084 17.39 24.7458 17.5 24.375 17.5C23.8777 17.5 23.4008 17.3025 23.0492 16.9508C22.6975 16.5992 22.5 16.1223 22.5 15.625Z" fill="#633CFF"/>
          </svg>
          <h3>+ Upload Image</h3>         
        </div>

        <h6>Image must be below 1024x1024px. <br></br>Use PNG or JPG format.</h6>
      </div>
      <div className="profilDetailsBottom">
        <div className="profilDetailsInputs">
          <div className='firstInput'>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" name='firstName' placeholder='e.g. John' onChange={(e) => {
            setUserFirstName(e.target.value)
          }}/>
          </div>
          <div className='secondInput'>
          <label htmlFor="lastName">Last Name*</label>
          <input type="text" name='lastName' placeholder='e.g. Appleseed' onChange={(e) => {
            setUserLastName(e.target.value)
          }}/>
          </div>
          <div className='thirdInput'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='e.g. email@example.com' onChange={(e) => {
            setUserEmail(e.target.value)
          }}/>
          </div>
        </div>
      </div>
      <div className="linksButton">
          <div onClick={() => {
          setPart("Previeuw")
          }}>Save</div>
        </div>
    </form>
    </>
  )
}

export default ProfilDetails