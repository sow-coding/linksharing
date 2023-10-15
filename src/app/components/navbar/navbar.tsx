import "./navbar.module.css"
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarLeft">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.61875 25.38C4.57341 27.3334 7.71475 27.3334 14.0001 27.3334C20.2854 27.3334 23.4281 27.3334 25.3801 25.38C27.3334 23.4294 27.3334 20.2854 27.3334 14C27.3334 7.71469 27.3334 4.57202 25.3801 2.61869C23.4294 0.666687 20.2854 0.666687 14.0001 0.666687C7.71475 0.666687 4.57208 0.666687 2.61875 2.61869C0.666748 4.57335 0.666748 7.71469 0.666748 14C0.666748 20.2854 0.666748 23.428 2.61875 25.38ZM10.6667 9.66669C9.8097 9.66669 8.97189 9.92083 8.25928 10.397C7.54666 10.8731 6.99125 11.5499 6.66327 12.3417C6.33529 13.1335 6.24948 14.0048 6.41668 14.8454C6.58388 15.686 6.99659 16.4581 7.60262 17.0641C8.20865 17.6702 8.98077 18.0829 9.82136 18.2501C10.6619 18.4173 11.5332 18.3315 12.325 18.0035C13.1169 17.6755 13.7936 17.1201 14.2698 16.4075C14.7459 15.6949 15.0001 14.8571 15.0001 14C15.0001 13.7348 15.1054 13.4804 15.293 13.2929C15.4805 13.1054 15.7349 13 16.0001 13C16.2653 13 16.5197 13.1054 16.7072 13.2929C16.8947 13.4804 17.0001 13.7348 17.0001 14C17.0001 15.2526 16.6286 16.4771 15.9327 17.5186C15.2368 18.5601 14.2477 19.3719 13.0904 19.8513C11.9331 20.3306 10.6597 20.456 9.43118 20.2117C8.20263 19.9673 7.07414 19.3641 6.18841 18.4784C5.30267 17.5926 4.69948 16.4641 4.45511 15.2356C4.21073 14.007 4.33616 12.7336 4.81551 11.5764C5.29487 10.4191 6.10663 9.42996 7.14814 8.73405C8.18965 8.03813 9.41413 7.66669 10.6667 7.66669C10.932 7.66669 11.1863 7.77204 11.3739 7.95958C11.5614 8.14712 11.6667 8.40147 11.6667 8.66669C11.6667 8.9319 11.5614 9.18626 11.3739 9.37379C11.1863 9.56133 10.932 9.66669 10.6667 9.66669ZM21.6667 14C21.6667 15.1493 21.2102 16.2515 20.3975 17.0641C19.5849 17.8768 18.4827 18.3334 17.3334 18.3334C17.0682 18.3334 16.8138 18.4387 16.6263 18.6262C16.4388 18.8138 16.3334 19.0681 16.3334 19.3334C16.3334 19.5986 16.4388 19.8529 16.6263 20.0405C16.8138 20.228 17.0682 20.3334 17.3334 20.3334C18.586 20.3334 19.8105 19.9619 20.852 19.266C21.8935 18.5701 22.7053 17.5809 23.1847 16.4237C23.664 15.2664 23.7894 13.993 23.5451 12.7644C23.3007 11.5359 22.6975 10.4074 21.8118 9.52168C20.926 8.63594 19.7975 8.03275 18.569 7.78838C17.3404 7.54401 16.067 7.66943 14.9098 8.14878C13.7525 8.62814 12.7634 9.4399 12.0674 10.4814C11.3715 11.5229 11.0001 12.7474 11.0001 14C11.0001 14.2652 11.1054 14.5196 11.293 14.7071C11.4805 14.8947 11.7349 15 12.0001 15C12.2653 15 12.5197 14.8947 12.7072 14.7071C12.8947 14.5196 13.0001 14.2652 13.0001 14C13.0001 12.8507 13.4566 11.7485 14.2693 10.9359C15.0819 10.1232 16.1841 9.66669 17.3334 9.66669C18.4827 9.66669 19.5849 10.1232 20.3975 10.9359C21.2102 11.7485 21.6667 12.8507 21.6667 14Z" fill="#633CFF"/>
            </svg>
            <h2>devlinks</h2>
        </div>
        <div className="navbarCenter">
            <div className="linksButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M11.154 14.6508C11.2414 14.7379 11.3107 14.8413 11.3581 14.9553C11.4054 15.0693 11.4297 15.1914 11.4297 15.3148C11.4297 15.4382 11.4054 15.5604 11.3581 15.6743C11.3107 15.7883 11.2414 15.8918 11.154 15.9789L10.6899 16.4429C9.81057 17.3223 8.61791 17.8163 7.3743 17.8163C6.1307 17.8163 4.93804 17.3223 4.05868 16.4429C3.17932 15.5636 2.6853 14.3709 2.6853 13.1273C2.6853 11.8837 3.17932 10.691 4.05868 9.81169L5.94305 7.9281C6.78796 7.0811 7.92476 6.58921 9.12057 6.55319C10.3164 6.51717 11.4807 6.93974 12.3751 7.73435C12.4674 7.81642 12.5427 7.91588 12.5966 8.02705C12.6505 8.13821 12.682 8.2589 12.6892 8.38223C12.6965 8.50556 12.6794 8.62911 12.6389 8.74582C12.5984 8.86254 12.5353 8.97014 12.4532 9.06247C12.3711 9.15481 12.2717 9.23007 12.1605 9.28397C12.0493 9.33787 11.9287 9.36934 11.8053 9.3766C11.682 9.38385 11.5585 9.36675 11.4417 9.32625C11.325 9.28576 11.2174 9.22267 11.1251 9.1406C10.5888 8.66429 9.89074 8.4109 9.17377 8.43224C8.4568 8.45359 7.77508 8.74807 7.26805 9.25544L5.38524 11.1367C4.85771 11.6642 4.56135 12.3797 4.56135 13.1258C4.56135 13.8718 4.85771 14.5873 5.38524 15.1148C5.91277 15.6423 6.62826 15.9387 7.3743 15.9387C8.12035 15.9387 8.83583 15.6423 9.36337 15.1148L9.82743 14.6508C9.9145 14.5636 10.0179 14.4944 10.1317 14.4473C10.2455 14.4001 10.3675 14.3758 10.4907 14.3758C10.6139 14.3758 10.7359 14.4001 10.8497 14.4473C10.9635 14.4944 11.0669 14.5636 11.154 14.6508ZM16.9415 3.557C16.0614 2.679 14.869 2.18591 13.6259 2.18591C12.3827 2.18591 11.1903 2.679 10.3102 3.557L9.84618 4.02107C9.67006 4.19719 9.57112 4.43606 9.57112 4.68513C9.57112 4.9342 9.67006 5.17307 9.84618 5.34919C10.0223 5.52531 10.2612 5.62426 10.5102 5.62426C10.7593 5.62426 10.9982 5.52531 11.1743 5.34919L11.6384 4.88513C12.1659 4.3576 12.8814 4.06123 13.6274 4.06123C14.3735 4.06123 15.089 4.3576 15.6165 4.88513C16.144 5.41266 16.4404 6.12815 16.4404 6.87419C16.4404 7.62023 16.144 8.33572 15.6165 8.86325L13.7329 10.7476C13.2254 11.2548 12.5433 11.5488 11.8262 11.5696C11.109 11.5904 10.4111 11.3363 9.87509 10.8593C9.78275 10.7773 9.67515 10.7142 9.55844 10.6737C9.44172 10.6332 9.31817 10.6161 9.19484 10.6233C9.07152 10.6306 8.95082 10.6621 8.83966 10.716C8.7285 10.7699 8.62904 10.8451 8.54696 10.9375C8.46488 11.0298 8.4018 11.1374 8.36131 11.2541C8.32081 11.3708 8.30371 11.4944 8.31096 11.6177C8.31821 11.741 8.34969 11.8617 8.40359 11.9729C8.45748 12.0841 8.53275 12.1835 8.62509 12.2656C9.51882 13.06 10.6824 13.4829 11.8776 13.4476C13.0729 13.4123 14.2095 12.9215 15.0548 12.0758L16.9391 10.1922C17.8182 9.3123 18.3121 8.11957 18.3126 6.87585C18.313 5.63212 17.8199 4.43905 16.9415 3.55857V3.557Z" fill="#633CFF"/>
                </svg>
                <p>Links</p>
            </div>
            <div className="profileDetailsButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M10.5 1.5625C8.83122 1.5625 7.19992 2.05735 5.81238 2.98448C4.42484 3.9116 3.34338 5.22936 2.70477 6.77111C2.06616 8.31286 1.89907 10.0094 2.22463 11.6461C2.55019 13.2828 3.35379 14.7862 4.53379 15.9662C5.7138 17.1462 7.21721 17.9498 8.85393 18.2754C10.4906 18.6009 12.1871 18.4338 13.7289 17.7952C15.2706 17.1566 16.5884 16.0752 17.5155 14.6876C18.4427 13.3001 18.9375 11.6688 18.9375 10C18.935 7.763 18.0453 5.61833 16.4635 4.03653C14.8817 2.45473 12.737 1.56498 10.5 1.5625ZM6.71641 15.357C7.15163 14.7619 7.72107 14.2779 8.37849 13.9442C9.0359 13.6106 9.76276 13.4367 10.5 13.4367C11.2373 13.4367 11.9641 13.6106 12.6215 13.9442C13.2789 14.2779 13.8484 14.7619 14.2836 15.357C13.1778 16.1412 11.8556 16.5625 10.5 16.5625C9.14436 16.5625 7.82221 16.1412 6.71641 15.357ZM8.3125 9.375C8.3125 8.94235 8.4408 8.51942 8.68116 8.15969C8.92153 7.79996 9.26317 7.51958 9.66288 7.35401C10.0626 7.18845 10.5024 7.14513 10.9268 7.22953C11.3511 7.31394 11.7409 7.52228 12.0468 7.8282C12.3527 8.13413 12.5611 8.52391 12.6455 8.94824C12.7299 9.37257 12.6866 9.81241 12.521 10.2121C12.3554 10.6118 12.075 10.9535 11.7153 11.1938C11.3556 11.4342 10.9327 11.5625 10.5 11.5625C9.91984 11.5625 9.36344 11.332 8.95321 10.9218C8.54297 10.5116 8.3125 9.95516 8.3125 9.375ZM15.6563 14.0578C15.0486 13.2849 14.2741 12.6595 13.3906 12.2281C13.9537 11.658 14.3355 10.934 14.4881 10.1474C14.6408 9.36074 14.5573 8.54653 14.2484 7.80718C13.9394 7.06783 13.4187 6.43637 12.7517 5.99223C12.0847 5.5481 11.3013 5.31112 10.5 5.31112C9.69869 5.31112 8.91528 5.5481 8.24831 5.99223C7.58135 6.43637 7.06062 7.06783 6.75165 7.80718C6.44267 8.54653 6.35925 9.36074 6.51187 10.1474C6.66449 10.934 7.04634 11.658 7.60938 12.2281C6.72592 12.6595 5.9514 13.2849 5.34375 14.0578C4.58051 13.0903 4.10512 11.9274 3.972 10.7022C3.83888 9.47711 4.05341 8.23925 4.59104 7.13037C5.12867 6.02148 5.96767 5.08639 7.01199 4.43212C8.05631 3.77786 9.26375 3.43086 10.4961 3.43086C11.7284 3.43086 12.9359 3.77786 13.9802 4.43212C15.0245 5.08639 15.8635 6.02148 16.4012 7.13037C16.9388 8.23925 17.1533 9.47711 17.0202 10.7022C16.8871 11.9274 16.4117 13.0903 15.6484 14.0578H15.6563Z" fill="#737373"/>
                </svg>
                <p>Profile Details</p>
            </div>  
        </div>
        <div className="navbarRight">
            <p>Previeuw</p>
        </div>
    </div>
  )
}

export default Navbar