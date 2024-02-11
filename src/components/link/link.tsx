"use client"
import { useState } from "react";
import { useLinksContext } from "../../context/linksContext";

interface LinkProps {
    key: number;
    index: number;
  }
  
function Link(props: LinkProps) {
    const {links, setLinks} = useLinksContext()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const initialPlatform = links.length === 0 ? "GitHub" : links[props.index].platform
    const initialLinkUrl = links.length === 0 ? "" : links[props.index].linkUrl
    const [platformSelected, setPlatformSelected] = useState<string>(initialPlatform)
    const [linkInput, setLinkInput] = useState(initialLinkUrl)

    const deleteLink = (index) => {
      setLinks((prevLinks) => {
        const updatedLinks = [...prevLinks];
        updatedLinks.splice(index, 1);
        return updatedLinks;
      });
    };
    return (
      <div className='link' data-testid="link" onClick={() => {
        isOpen === true && setIsOpen(false)
      }}>
        <div className="linkTop">
          <div className="linkTopLeft">
            <p>Link #{props.index  + 1}</p>
          </div>
          <p data-testid="remove" className={`${props.index}`} onClick={() => {
            deleteLink(props.index)
          }}>Remove</p>
        </div>
        <div className="linkInputs">
          <div className="linkFirstInput">
            <label id="platform">Platform</label>
            <div className='togglePlatform' onClick={() => {  isOpen === false && setIsOpen(true) }}>
              <div className={`introListDropDown ${isOpen === true && "none"}`}>
                <p className={`${isOpen === true && "none"}`}>{platformSelected}</p>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M13 8L7 2L1 8" stroke="#633CFF" strokeWidth="2"/>
              </svg> :             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                <path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2"/>
              </svg>}
              </div>
              {isOpen && 
              <ul className='ulTogglePlatform'>
                <div onClick={() => {
                  setPlatformSelected("GitHub");
                  const modifyFirstPlatform = () => {
                    const newLinks = [...links]
                    newLinks[props.index] = {
                      ...newLinks[props.index], 
                      platform : "GitHub",
                    }
                    setLinks(newLinks)
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
                    const newLinks = [...links]
                    newLinks[props.index] = {
                      ...newLinks[props.index], 
                      platform : "Facebook",
                    }
                    setLinks(newLinks)
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
                    const newLinks = [...links]
                    newLinks[props.index] = {
                      ...newLinks[props.index], 
                      platform : "YouTube",
                    }
                    setLinks(newLinks)
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
                    const newLinks = [...links]
                    newLinks[props.index] = {
                      ...newLinks[props.index], 
                      platform : "Linkedin",
                    }
                    setLinks(newLinks)
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
                    const newLinks = [...links]
                    newLinks[props.index] = {
                      ...newLinks[props.index], 
                      platform : "FrontendMentor",
                    }
                    setLinks(newLinks)
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
            <label id="link">Link</label>
            <input
              type="text"
              placeholder="e.g. https://www.github.com/johnappleseed"
              defaultValue={linkInput}
              onChange={(e) => {
                const newLinks = [...links]
                newLinks[props.index] = {
                  ...newLinks[props.index], 
                  linkUrl: e.currentTarget.value
                }
                setLinks(newLinks)
              }}
            />
          </div>
        </div>
      </div>
    )
}

export default Link