"use client"
import React, { useState } from 'react'

interface LinkProps {
  index: number;
  linksInThePhone: any;
  setLinksInThePhone: any;
  deleteLink: () => void;
  linksInTheApp: any;
  setLinksInTheApp: any;
}

function Link(props: LinkProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [platformSelected, setPlatformSelected] = useState<string>("GitHub")
  const [linkInput, setLinkInput] = useState("")

  return (
    <div className='link' data-testid="link" onClick={() => {
      isOpen === true && setIsOpen(false)
    }}>
      <div className="linkTop">
        <div className="linkTopLeft">
          <p>Link #{props.index  + 1}</p>
        </div>
        <p data-testid="remove" className={`${props.index}`} onClick={() => {
          props.deleteLink()
        }}>Remove</p>
      </div>
      <div className="linkInputs">
        <div className="linkFirstInput">
          <label htmlFor="platform">Platform</label>
          <div className='togglePlatform' onClick={() => {  isOpen === false && setIsOpen(true) }}>
            <div className={`introListDropDown ${isOpen === true && "none"}`}>
              <p className={`${isOpen === true && "none"}`}>{platformSelected}</p>
              {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
              <path d="M13 8L7 2L1 8" stroke="#633CFF" stroke-width="2"/>
            </svg> :             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
              <path d="M1 1L7 7L13 1" stroke="#633CFF" stroke-width="2"/>
            </svg>}
            </div>
            {isOpen === true && 
            <ul className='ulTogglePlatform'>
              <div onClick={() => {
                setPlatformSelected("GitHub");
                const modifyFirstPlatform = () => {
                  const newLinksInThePhone = [...props.linksInThePhone]
                  newLinksInThePhone[props.index] = "GitHub"
                  props.setLinksInThePhone(newLinksInThePhone)
                  props.setLinksInTheApp(newLinksInThePhone)
                }
                modifyFirstPlatform()
                setIsOpen(false);
              }}>
                <div className='github'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_112_555)">
                    <path d="M9.98187 2.28805C8.67799 1.98507 7.32201 1.98507 6.01813 2.28805C5.26507 1.82619 4.69013 1.61392 4.272 1.52432C4.09354 1.48404 3.91093 1.46506 3.728 1.46779C3.64476 1.47004 3.56192 1.48004 3.48053 1.49765L3.46987 1.49979L3.4656 1.50192H3.4624L3.60853 2.01499L3.4624 1.50299C3.38746 1.52416 3.31807 1.56149 3.2591 1.61235C3.20013 1.66321 3.15302 1.72637 3.12107 1.79739C2.80637 2.50214 2.74642 3.29436 2.95147 4.03845C2.42041 4.68203 2.13101 5.49099 2.13333 6.32539C2.13333 7.98192 2.62187 9.09552 3.45493 9.81125C4.0384 10.3126 4.74667 10.5793 5.45707 10.7318C5.34527 11.0601 5.30313 11.4081 5.33333 11.7537V12.3915C4.8992 12.4822 4.5984 12.4534 4.384 12.383C4.11627 12.2945 3.9104 12.1163 3.71307 11.8603C3.60991 11.7223 3.51379 11.5792 3.42507 11.4315L3.36427 11.3323C3.28749 11.2047 3.20783 11.0788 3.12533 10.9547C2.92267 10.655 2.62187 10.2795 2.13547 10.1515L1.6192 10.0161L1.34827 11.0486L1.86453 11.1841C1.94987 11.2054 2.0608 11.2854 2.2432 11.5531C2.31341 11.6588 2.38098 11.7662 2.44587 11.8753L2.5184 11.9926C2.61867 12.1547 2.73387 12.3339 2.8672 12.5089C3.13707 12.8609 3.50507 13.2161 4.0512 13.3963C4.42453 13.5201 4.84907 13.5499 5.33333 13.4753V15.4667C5.33333 15.6082 5.38952 15.7438 5.48954 15.8438C5.58956 15.9439 5.72522 16.0001 5.86667 16.0001H10.1333C10.2748 16.0001 10.4104 15.9439 10.5105 15.8438C10.6105 15.7438 10.6667 15.6082 10.6667 15.4667V11.6662C10.6667 11.3302 10.6517 11.0219 10.5568 10.735C11.264 10.5857 11.9669 10.319 12.5472 9.81765C13.3792 9.09659 13.8667 7.97232 13.8667 6.30619V6.30512C13.864 5.47756 13.5745 4.67652 13.0475 4.03845C13.2523 3.2947 13.1923 2.50289 12.8779 1.79845C12.8462 1.72735 12.7993 1.66406 12.7405 1.61301C12.6817 1.56197 12.6124 1.52442 12.5376 1.50299L12.3915 2.01499C12.5376 1.50299 12.5365 1.50299 12.5355 1.50299L12.5333 1.50192L12.5291 1.49979L12.5195 1.49765C12.4931 1.4908 12.4664 1.48546 12.4395 1.48165C12.3836 1.4735 12.3273 1.46887 12.2709 1.46779C12.088 1.46508 11.9054 1.48406 11.7269 1.52432C11.3099 1.61392 10.7349 1.82619 9.98187 2.28805Z" fill="#737373"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_112_555">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p>GitHub</p>
                </div>
              <div className='platformLign'></div></div>
              <div onClick={() => {
                setPlatformSelected("Facebook");
                const modifySecondPlatform = () => {
                  const newLinksInThePhone = [...props.linksInThePhone]
                  newLinksInThePhone[props.index] = "Facebook"
                  props.setLinksInThePhone(newLinksInThePhone)
                  props.setLinksInTheApp(newLinksInThePhone)

                }
                modifySecondPlatform()
                setIsOpen(false);
              }}>
                <div className='facebook'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_112_570)">
                  <path d="M16 8.04902C16 3.60302 12.418 -0.000976562 8 -0.000976562C3.58 2.34375e-05 -0.0019989 3.60302 -0.0019989 8.05002C-0.0019989 12.067 2.924 15.397 6.748 16.001V10.376H4.718V8.05002H6.75V6.27502C6.75 4.25802 7.945 3.14402 9.772 3.14402C10.648 3.14402 11.563 3.30102 11.563 3.30102V5.28102H10.554C9.561 5.28102 9.251 5.90202 9.251 6.53902V8.04902H11.469L11.115 10.375H9.25V16C13.074 15.396 16 12.066 16 8.04902Z" fill="#737373"/>
                </g>
                <defs>
                  <clipPath id="clip0_112_570">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
                </svg>
                  <p>Facebook</p>
                </div>
              <div className='platformLign'></div></div>
              <div onClick={() => {
                setPlatformSelected("YouTube");
                const modifyThirdPlatform = () => {
                  const newLinksInThePhone = [...props.linksInThePhone]
                  newLinksInThePhone[props.index] = "YouTube"
                  props.setLinksInThePhone(newLinksInThePhone)
                  props.setLinksInTheApp(newLinksInThePhone)

                }
                modifyThirdPlatform()
                setIsOpen(false);
              }}>
                <div className='youtube'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8.16267 2.66675C8.51867 2.66875 9.40933 2.67741 10.356 2.71541L10.692 2.73008C11.6447 2.77475 12.5967 2.85208 13.0693 2.98341C13.6993 3.16075 14.194 3.67675 14.3613 4.33141C14.628 5.37141 14.6613 7.39942 14.6653 7.89075L14.666 7.99208V8.10808C14.6613 8.59941 14.628 10.6281 14.3613 11.6674C14.192 12.3241 13.6967 12.8407 13.0693 13.0154C12.5967 13.1467 11.6447 13.2241 10.692 13.2687L10.356 13.2841C9.40933 13.3214 8.51867 13.3307 8.16267 13.3321L8.006 13.3327H7.836C7.08267 13.3281 3.932 13.2941 2.92933 13.0154C2.3 12.8381 1.80467 12.3221 1.63733 11.6674C1.37067 10.6274 1.33733 8.59941 1.33333 8.10808V7.89075C1.33733 7.39942 1.37067 5.37075 1.63733 4.33141C1.80667 3.67475 2.302 3.15808 2.93 2.98408C3.932 2.70475 7.08333 2.67075 7.83667 2.66675H8.16267ZM6.666 5.66675V10.3334L10.666 8.00008L6.666 5.66675Z" fill="#737373"/>
                </svg>
                <p>YouTube</p>
                </div>
              <div className='platformLign'></div></div>
              <div onClick={() => {
                setPlatformSelected("Linkedin");
                const modifyFourthPlatform = () => {
                  const newLinksInThePhone = [...props.linksInThePhone]
                  newLinksInThePhone[props.index] = "Linkedin"
                  props.setLinksInThePhone(newLinksInThePhone)
                  props.setLinksInTheApp(newLinksInThePhone)

                }
                modifyFourthPlatform()
                setIsOpen(false);
              }}>
                <div className='linkedin'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z" fill="#737373"/>
              </svg>                  
                  <p>Linkedin</p>
                </div>
              <div className='platformLign'></div>
              </div>
              
              <div onClick={() => {
                setPlatformSelected("Frontend Mentor");
                const modifyFifthPlatform = () => {
                  const newLinksInThePhone = [...props.linksInThePhone]
                  newLinksInThePhone[props.index] = "Frontend Mentor"
                  props.setLinksInThePhone(newLinksInThePhone)
                  props.setLinksInTheApp(newLinksInThePhone)

                }
                modifyFifthPlatform()
                setIsOpen(false);
              }}>
                <div className='frontendmentor'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.5123 8.38838C15.4435 8.38841 15.3754 8.3723 15.3126 8.34108L11.124 6.24291C11.0381 6.19973 10.9652 6.12971 10.9141 6.04126C10.8629 5.95282 10.8357 5.84973 10.8357 5.74439C10.8357 5.63905 10.8629 5.53596 10.9141 5.44752C10.9652 5.35907 11.0381 5.28905 11.124 5.24587L15.3126 3.15498C15.4308 3.09627 15.565 3.09233 15.6858 3.14402C15.8067 3.19571 15.9043 3.29882 15.9573 3.43081C16.0097 3.56316 16.0132 3.71336 15.9668 3.84853C15.9205 3.9837 15.8282 4.09283 15.7101 4.15203L12.5189 5.74512L15.7107 7.34403C15.8128 7.39493 15.8961 7.48348 15.9468 7.59488C15.9976 7.70627 16.0125 7.83376 15.9893 7.95603C15.9661 8.0783 15.906 8.18795 15.8192 8.26665C15.7324 8.34534 15.624 8.38831 15.5123 8.38838Z" fill="#737373"/>
                  <path d="M9.80398 16C5.19906 16 1.17317 12.5227 0.015755 7.54328C-0.0168568 7.40324 0.00159638 7.25445 0.067055 7.12964C0.132514 7.00483 0.239616 6.91421 0.3648 6.87773C0.489984 6.84125 0.622996 6.86189 0.734575 6.93512C0.846153 7.00834 0.927159 7.12815 0.959771 7.26818C1.47035 9.45692 2.61559 11.3944 4.21607 12.7769C5.81654 14.1595 7.78182 14.9091 9.80398 14.9083C9.93339 14.9083 10.0575 14.9658 10.149 15.0682C10.2405 15.1706 10.2919 15.3094 10.2919 15.4541C10.2919 15.5989 10.2405 15.7377 10.149 15.8401C10.0575 15.9425 9.93339 16 9.80398 16Z" fill="#737373"/>
                  <path d="M8.12281 11.4675C7.9934 11.4675 7.86929 11.41 7.77778 11.3076C7.68627 11.2053 7.63486 11.0664 7.63486 10.9217V0.545828C7.63486 0.401066 7.68627 0.262232 7.77778 0.159869C7.86929 0.0575067 7.9934 0 8.12281 0C8.25222 0 8.37633 0.0575067 8.46784 0.159869C8.55935 0.262232 8.61076 0.401066 8.61076 0.545828V10.9217C8.61076 11.0664 8.55935 11.2053 8.46784 11.3076C8.37633 11.41 8.25222 11.4675 8.12281 11.4675Z" fill="#737373"/>
                </svg>                 
                  <p>Frontend Mentor</p>
                </div>
              <div className='platformLign'></div>
              </div>
            </ul>
            }
          </div>
        </div>
        
        <div className="linkSecondInput">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            placeholder="e.g. https://www.github.com/johnappleseed"
            value={linkInput}
            onChange={(e) => {setLinkInput(e.currentTarget.value)}}
          />
        </div>
      </div>
    </div>
  )
}

type customLinks = {
  setPart?: any,
  setLinksTheApp?: any,
  linksInTheApp?: any,
  cannotPrevieuw?: any,
  setLinksInTheApp?: any
}

function CustomLinks({setPart, setLinksInTheApp, linksInTheApp, cannotPrevieuw}:customLinks) {
  const [links, setLinks] = useState([])
  const [linksInThePhone, setLinksInThePhone] = useState([])
  const [cannotPass, setCannotPass] = useState<boolean>(false)
  const [cannotAdd, setCannotAdd] = useState<boolean>(false)
  const deleteLink = (index) => {
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks];
      updatedLinks.splice(index, 1);
      return updatedLinks;
    });
    setLinksInThePhone((prevLinks) => {
      const updatedLinks = [...prevLinks];
      updatedLinks.splice(index, 1);
      return updatedLinks;
    });
  };

  function LinksContainer() {
    const MAX_DIVS = 5; 
  
    return (
      <div className='linksContainerDiv'>
        <div className="underLinksContainerDiv">
          <div className="popContainer"></div>
          <div className="textContainer"></div>
          <div className="littleTextContainer"></div>
          <div className="linksInTheContainer">
            {linksInThePhone.slice(0, MAX_DIVS).map((link, index) => (
              <div key={index} className='linkInTheContainer'>
                <div className={
                  linksInThePhone[index] === "GitHub"
                  ? "githubInThePhone"
                  : linksInThePhone[index] === "YouTube"
                  ? "youtubeInThePhone"
                  : linksInThePhone[index] === "Facebook"
                  ? "facebookInThePhone"
                  : linksInThePhone[index] === "Linkedin"
                  ? "linkedinInThePhone"
                  : linksInThePhone[index] === "Frontend Mentor"
                  ? "frontendmentorInThePhone"
                  : "none"
                }>
                  <div className={
                  linksInThePhone[index] === "GitHub"
                  ? "githubInThePhoneLeft"
                  : linksInThePhone[index] === "YouTube"
                  ? "youtubeInThePhoneLeft"
                  : linksInThePhone[index] === "Facebook"
                  ? "facebookInThePhoneLeft"
                  : linksInThePhone[index] === "Linkedin"
                  ? "linkedinInThePhoneLeft"
                  : linksInThePhone[index] === "Frontend Mentor"
                  ? "frontendmentorInThePhoneLeft"
                  : "none"                   
                  }>
                  {
                  linksInThePhone[index] === "GitHub"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                  <path d="M8.98187 1.28805C7.67799 0.985074 6.32201 0.985074 5.01813 1.28805C4.26507 0.826185 3.69013 0.613919 3.272 0.524319C3.09354 0.484042 2.91093 0.465065 2.728 0.467785C2.64476 0.470041 2.56192 0.48004 2.48053 0.497652L2.46987 0.499785L2.4656 0.501919H2.4624L2.60853 1.01499L2.4624 0.502985C2.38746 0.524162 2.31807 0.561492 2.2591 0.612353C2.20013 0.663213 2.15302 0.72637 2.12107 0.797385C1.80637 1.50214 1.74642 2.29436 1.95147 3.03845C1.42041 3.68203 1.13101 4.49099 1.13333 5.32539C1.13333 6.98192 1.62187 8.09552 2.45493 8.81125C3.0384 9.31259 3.74667 9.57925 4.45707 9.73179C4.34527 10.0601 4.30313 10.4081 4.33333 10.7537V11.3915C3.8992 11.4822 3.5984 11.4534 3.384 11.383C3.11627 11.2945 2.9104 11.1163 2.71307 10.8603C2.60991 10.7223 2.51379 10.5792 2.42507 10.4315L2.36427 10.3323C2.28749 10.2047 2.20783 10.0788 2.12533 9.95472C1.92267 9.65499 1.62187 9.27952 1.13547 9.15152L0.6192 9.01605L0.348267 10.0486L0.864533 10.1841C0.949867 10.2054 1.0608 10.2854 1.2432 10.5531C1.31341 10.6588 1.38098 10.7662 1.44587 10.8753L1.5184 10.9926C1.61867 11.1547 1.73387 11.3339 1.8672 11.5089C2.13707 11.8609 2.50507 12.2161 3.0512 12.3963C3.42453 12.5201 3.84907 12.5499 4.33333 12.4753V14.4667C4.33333 14.6082 4.38952 14.7438 4.48954 14.8438C4.58956 14.9439 4.72522 15.0001 4.86667 15.0001H9.13333C9.27478 15.0001 9.41044 14.9439 9.51046 14.8438C9.61048 14.7438 9.66667 14.6082 9.66667 14.4667V10.6662C9.66667 10.3302 9.65173 10.0219 9.5568 9.73499C10.264 9.58565 10.9669 9.31899 11.5472 8.81765C12.3792 8.09659 12.8667 6.97232 12.8667 5.30619V5.30512C12.864 4.47756 12.5745 3.67652 12.0475 3.03845C12.2523 2.2947 12.1923 1.50289 11.8779 0.798452C11.8462 0.727352 11.7993 0.664058 11.7405 0.613014C11.6817 0.561971 11.6124 0.524415 11.5376 0.502985L11.3915 1.01499C11.5376 0.502985 11.5365 0.502985 11.5355 0.502985L11.5333 0.501919L11.5291 0.499785L11.5195 0.497652C11.4931 0.490802 11.4664 0.48546 11.4395 0.481652C11.3836 0.473499 11.3273 0.468868 11.2709 0.467785C11.088 0.465085 10.9054 0.484061 10.7269 0.524319C10.3099 0.613919 9.73493 0.826185 8.98187 1.28805Z" fill="white"/>
                </svg>
                  : linksInThePhone[index] === "YouTube"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8.16265 2.66675C8.51865 2.66875 9.40931 2.67741 10.356 2.71541L10.692 2.73008C11.6446 2.77475 12.5966 2.85208 13.0693 2.98341C13.6993 3.16075 14.194 3.67675 14.3613 4.33141C14.628 5.37141 14.6613 7.39942 14.6653 7.89075L14.666 7.99208V8.10808C14.6613 8.59941 14.628 10.6281 14.3613 11.6674C14.192 12.3241 13.6966 12.8407 13.0693 13.0154C12.5966 13.1467 11.6446 13.2241 10.692 13.2687L10.356 13.2841C9.40931 13.3214 8.51865 13.3307 8.16265 13.3321L8.00598 13.3327H7.83598C7.08265 13.3281 3.93198 13.2941 2.92931 13.0154C2.29998 12.8381 1.80465 12.3221 1.63731 11.6674C1.37065 10.6274 1.33731 8.59941 1.33331 8.10808V7.89075C1.33731 7.39942 1.37065 5.37075 1.63731 4.33141C1.80665 3.67475 2.30198 3.15808 2.92998 2.98408C3.93198 2.70475 7.08331 2.67075 7.83665 2.66675H8.16265ZM6.66598 5.66675V10.3334L10.666 8.00008L6.66598 5.66675Z" fill="white"/>
                </svg>
                  : linksInThePhone[index] === "Facebook"
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
                  : linksInThePhone[index] === "Linkedin"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z" fill="white"/>
                </svg>
                  : linksInThePhone[index] === "Frontend Mentor"
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                  <path d="M21.6905 10.4854C21.5943 10.4854 21.4992 10.4653 21.4112 10.4262L15.5545 7.80353C15.4344 7.74955 15.3325 7.66202 15.2609 7.55146C15.1894 7.44091 15.1514 7.31204 15.1514 7.18037C15.1514 7.0487 15.1894 6.91983 15.2609 6.80928C15.3325 6.69872 15.4344 6.61119 15.5545 6.55722L21.4112 3.9436C21.5766 3.87021 21.7642 3.86529 21.9332 3.9299C22.1021 3.99451 22.2386 4.12341 22.3128 4.28839C22.3861 4.45382 22.3909 4.64158 22.3261 4.81054C22.2613 4.97951 22.1322 5.11592 21.9671 5.18991L17.5049 7.18128L21.968 9.17992C22.1107 9.24355 22.2273 9.35424 22.2982 9.49348C22.3691 9.63272 22.39 9.79208 22.3575 9.94493C22.325 10.0978 22.2411 10.2348 22.1197 10.3332C21.9983 10.4316 21.8468 10.4853 21.6905 10.4854Z" fill="#67BECE"/>
                  <path d="M13.7087 20C7.26973 20 1.64041 15.6534 0.0220298 9.42916C-0.0235705 9.25412 0.00223218 9.06813 0.0937616 8.91211C0.185291 8.75609 0.33505 8.64283 0.510092 8.59723C0.685134 8.55162 0.871122 8.57743 1.02714 8.66896C1.18316 8.76049 1.29643 8.91024 1.34203 9.08529C2.05596 11.8212 3.65733 14.243 5.89524 15.9712C8.13315 17.6995 10.8811 18.6365 13.7087 18.6355C13.8896 18.6355 14.0632 18.7074 14.1911 18.8353C14.3191 18.9633 14.391 19.1368 14.391 19.3178C14.391 19.4987 14.3191 19.6723 14.1911 19.8002C14.0632 19.9282 13.8896 20 13.7087 20Z" fill="#3F54A3"/>
                  <path d="M11.3581 14.3344C11.1771 14.3344 11.0036 14.2625 10.8756 14.1345C10.7477 14.0066 10.6758 13.833 10.6758 13.6521V0.682286C10.6758 0.501333 10.7477 0.32779 10.8756 0.199837C11.0036 0.0718835 11.1771 0 11.3581 0C11.539 0 11.7126 0.0718835 11.8405 0.199837C11.9685 0.32779 12.0404 0.501333 12.0404 0.682286V13.6521C12.0404 13.833 11.9685 14.0066 11.8405 14.1345C11.7126 14.2625 11.539 14.3344 11.3581 14.3344Z" fill="#67BECE"/>
                </svg>
                  : "none" 
                  }
                  <p>{linksInThePhone[index]}</p>
                  </div>
                  {linksInThePhone[index] !== "Frontend Mentor" ? <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.66666 7.3333V8.66664H10.6667L6.99999 12.3333L7.94666 13.28L13.2267 7.99997L7.94666 2.71997L6.99999 3.66664L10.6667 7.3333H2.66666Z" fill="white"/>
                  </svg> : <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.66699 7.33355V8.66688H10.667L7.00033 12.3335L7.94699 13.2802L13.227 8.00022L7.94699 2.72021L7.00033 3.66688L10.667 7.33355H2.66699Z" fill="#737373"/>
                  </svg>}
                </div>
              </div>
            ))}
            {linksInThePhone.length < MAX_DIVS && (
              Array.from({ length: MAX_DIVS - linksInThePhone.length }).map((_, index) => (
                <div key={linksInThePhone.length + index} className='linkInTheContainer'></div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
  <>
      <LinksContainer />
      <div data-testid="customLinks" className='customLinks'>
        <h1>Custom your links</h1>
        <p>Add/edit/remove links below and then share all your profiles with the world!</p>
        <div data-testid="addNewLinkButton" className="addNewLinkButton" onClick={() => {
          const newLink = {
            platform: "",
            link: ""
          }; 
          function addLink () {
            setLinks((prevLinks) => [...prevLinks, newLink]);
            setLinksInThePhone([...linksInThePhone, "GitHub"])
          }
          function linkLimit () {
            setCannotAdd(true)
            setTimeout(() => {
              setCannotAdd(false)
            }, 1000)
          }        
          linksInThePhone.length <= 4 ? addLink() : linkLimit()
        }}>
            <p>+ Add new link</p>
        </div>
        <div className={`linksContainer ${links.length > 1 && "maxHeight"}`}>
          {links.length === 0 ? 
            <div className="linksContainerChild">
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="161" viewBox="0 0 250 161" fill="none">
    <path opacity="0.3" d="M48.6936 15.4213C23.3786 25.2238 4.59362 50.0679 0.857884 80.1285C-2.26282 105.459 5.19347 133.446 49.0884 141.419C134.494 156.939 222.534 158.754 242.952 116.894C263.369 75.0336 235.427 8.00293 192.079 3.36363C157.683 -0.326546 98.1465 -3.7206 48.6936 15.4213Z" fill="white"/>
    <path d="M157.022 9.56714H93.044C89.0309 9.56714 85.7776 12.8204 85.7776 16.8336V137.744C85.7776 141.757 89.0309 145.01 93.044 145.01H157.022C161.036 145.01 164.289 141.757 164.289 137.744V16.8336C164.289 12.8204 161.036 9.56714 157.022 9.56714Z" fill="#333333"/>
    <path opacity="0.03" d="M125.033 140.872C128.174 140.872 130.72 138.326 130.72 135.185C130.72 132.044 128.174 129.498 125.033 129.498C121.892 129.498 119.346 132.044 119.346 135.185C119.346 138.326 121.892 140.872 125.033 140.872Z" fill="#333333"/>
    <path d="M156.628 21.321H93.4314V126.78H156.628V21.321Z" fill="#EFEBFF"/>
    <path opacity="0.03" d="M117.797 120.508C118.938 120.508 119.862 119.583 119.862 118.443C119.862 117.302 118.938 116.377 117.797 116.377C116.656 116.377 115.732 117.302 115.732 118.443C115.732 119.583 116.656 120.508 117.797 120.508Z" fill="#333333"/>
    <path opacity="0.44" d="M125.033 120.508C126.174 120.508 127.099 119.583 127.099 118.443C127.099 117.302 126.174 116.377 125.033 116.377C123.893 116.377 122.968 117.302 122.968 118.443C122.968 119.583 123.893 120.508 125.033 120.508Z" fill="white"/>
    <path opacity="0.03" d="M132.269 120.508C133.41 120.508 134.335 119.583 134.335 118.443C134.335 117.302 133.41 116.377 132.269 116.377C131.129 116.377 130.204 117.302 130.204 118.443C130.204 119.583 131.129 120.508 132.269 120.508Z" fill="#333333"/>
    <path opacity="0.03" d="M148.199 32.9534H101.867V72.5051H148.199V32.9534Z" fill="#333333"/>
    <path opacity="0.03" d="M134.373 80.1285H101.867V83.7504H134.373V80.1285Z" fill="#333333"/>
    <path opacity="0.03" d="M148.199 80.1285H136.567V83.7504H148.199V80.1285Z" fill="#333333"/>
    <path opacity="0.03" d="M117.053 91.2371H101.867V94.8589H117.053V91.2371Z" fill="#333333"/>
    <path opacity="0.03" d="M148.199 91.2371H120.28V94.8589H148.199V91.2371Z" fill="#333333"/>
    <path opacity="0.03" d="M136.954 102.353H101.867V105.975H136.954V102.353Z" fill="#333333"/>
    <path d="M78.6555 21.321H15.4592V126.78H78.6555V21.321Z" fill="#EFEBFF"/>
    <path opacity="0.44" d="M39.8251 120.508C40.9657 120.508 41.8903 119.583 41.8903 118.443C41.8903 117.302 40.9657 116.377 39.8251 116.377C38.6844 116.377 37.7598 117.302 37.7598 118.443C37.7598 119.583 38.6844 120.508 39.8251 120.508Z" fill="white"/>
    <path opacity="0.03" d="M47.0611 120.508C48.2018 120.508 49.1264 119.583 49.1264 118.443C49.1264 117.302 48.2018 116.377 47.0611 116.377C45.9205 116.377 44.9958 117.302 44.9958 118.443C44.9958 119.583 45.9205 120.508 47.0611 120.508Z" fill="#333333"/>
    <path opacity="0.03" d="M54.297 120.508C55.4376 120.508 56.3623 119.583 56.3623 118.443C56.3623 117.302 55.4376 116.377 54.297 116.377C53.1563 116.377 52.2317 117.302 52.2317 118.443C52.2317 119.583 53.1563 120.508 54.297 120.508Z" fill="#333333"/>
    <path opacity="0.03" d="M70.227 32.9534H23.8948V72.5051H70.227V32.9534Z" fill="#333333"/>
    <path opacity="0.03" d="M56.4002 80.1285H23.8948V83.7504H56.4002V80.1285Z" fill="#333333"/>
    <path opacity="0.03" d="M70.2274 80.1285H58.595V83.7504H70.2274V80.1285Z" fill="#333333"/>
    <path opacity="0.03" d="M39.0807 91.2371H23.8948V94.8589H39.0807V91.2371Z" fill="#333333"/>
    <path opacity="0.03" d="M70.2272 91.2371H42.3079V94.8589H70.2272V91.2371Z" fill="#333333"/>
    <path opacity="0.03" d="M58.9819 102.353H23.8948V105.975H58.9819V102.353Z" fill="#333333"/>
    <path d="M234.6 21.321H171.403V126.78H234.6V21.321Z" fill="#EFEBFF"/>
    <path opacity="0.03" d="M195.769 120.508C196.91 120.508 197.834 119.583 197.834 118.443C197.834 117.302 196.91 116.377 195.769 116.377C194.629 116.377 193.704 117.302 193.704 118.443C193.704 119.583 194.629 120.508 195.769 120.508Z" fill="#333333"/>
    <path opacity="0.03" d="M203.005 120.508C204.146 120.508 205.071 119.583 205.071 118.443C205.071 117.302 204.146 116.377 203.005 116.377C201.865 116.377 200.94 117.302 200.94 118.443C200.94 119.583 201.865 120.508 203.005 120.508Z" fill="#333333"/>
    <path opacity="0.44" d="M210.242 120.508C211.382 120.508 212.307 119.583 212.307 118.443C212.307 117.302 211.382 116.377 210.242 116.377C209.101 116.377 208.176 117.302 208.176 118.443C208.176 119.583 209.101 120.508 210.242 120.508Z" fill="white"/>
    <path opacity="0.03" d="M226.171 32.9534H179.839V72.5051H226.171V32.9534Z" fill="#333333"/>
    <path opacity="0.03" d="M212.345 80.1285H179.839V83.7504H212.345V80.1285Z" fill="#333333"/>
    <path opacity="0.03" d="M226.171 80.1285H214.539V83.7504H226.171V80.1285Z" fill="#333333"/>
    <path opacity="0.03" d="M195.025 91.2371H179.839V94.8589H195.025V91.2371Z" fill="#333333"/>
    <path opacity="0.03" d="M226.179 91.2371H198.26V94.8589H226.179V91.2371Z" fill="#333333"/>
    <path opacity="0.03" d="M214.926 102.353H179.839V105.975H214.926V102.353Z" fill="#333333"/>
    <path opacity="0.1" d="M146.597 145.041C146.597 144.281 144.987 113.15 146.02 108.519C147.053 103.887 156.529 81.2447 154.031 78.6023C151.533 75.96 142.383 81.9736 142.383 81.9736C142.383 81.9736 144.054 54.7073 140.105 52.7635C136.157 50.8197 134.403 58.4354 134.403 58.4354L132.3 88.9363L121.882 144.896L146.597 145.041Z" fill="#333333"/>
    <path d="M139.559 113.295C140.887 107.979 142.884 102.793 144.16 97.4252C145.003 93.8717 150.455 79.0199 151.981 74.6463C152.451 73.3024 152.854 71.6775 151.943 70.5841C151.635 70.2644 151.252 70.0272 150.829 69.8946C150.406 69.7619 149.956 69.7379 149.521 69.8248C148.643 70.008 147.833 70.4312 147.182 71.0473C145.663 72.3836 142.862 78.9971 140.811 78.9895C138.329 78.9895 139.498 72.1558 139.43 70.8423C139.149 65.1855 139.566 57.9342 137.357 52.6191C135.717 48.6708 131.647 49.2023 130.69 53.4696C129.733 57.7368 129.771 75.6182 129.771 75.6182C129.771 75.6182 113.887 72.8924 111.176 77.7367C108.465 82.581 113.044 113.355 113.044 113.355L139.559 113.295Z" fill="#F4A28C"/>
    <path d="M141.495 160.5L141.206 111.594L111.525 105.079L99.574 160.5H141.495Z" fill="#633CFF"/>
    <path opacity="0.1" d="M141.495 160.5L141.206 111.594L127.038 108.481L124.502 160.5H141.495Z" fill="#333333"/>
              </svg>
            <h1>Let´s get you started</h1>
            <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
            </div>
          :
          links.map((link, index) => <Link key={index} index={index} deleteLink={() => {deleteLink(index)}} linksInThePhone={linksInThePhone} setLinksInThePhone={setLinksInThePhone} linksInTheApp={linksInTheApp} setLinksInTheApp={setLinksInTheApp}/> )}
            
        </div>
        <div className="linksButton">
            <div onClick={() => {
              linksInThePhone.length === 0 && setCannotPass(true)
              setTimeout(() => {
                setCannotPass(false)
              }, 1000)
              linksInThePhone.length !== 0 && setPart("profilDetails")
            }}>Save</div>
        </div>
      </div>

      <div className={`cannotPass ${
        cannotPass === true ? "cannotPassActive":"cannotPassDisable"
      }`}>
        <p>You have to create at least 1 link</p>
      </div>

      <div className={`cannotAdd ${
        cannotAdd === true ? "cannotAddActive":"cannotAddDisable"
      }`}>
        <p>You cannot create more than 5 links</p>
      </div>

      <div className={`cannotPrevieuw ${
        cannotPrevieuw === true ? "cannotPrevieuwActive":"cannotPrevieuwDisable"
      }`}>
        <p>You cannot go to the previeuw right now</p>
      </div>
  </>

  )
}

export default CustomLinks