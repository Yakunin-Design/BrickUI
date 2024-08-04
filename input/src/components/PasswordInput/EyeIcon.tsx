type props = {
	is_closed?: boolean
}

export default function EyeIcon(props: props) {
	if(props.is_closed) {
		return (
			<svg width="22px" height="16px" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			  <title>eye icon</title>
			  <g id="10-|-Worker-PO" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
				<g id="account-info" transform="translate(-1691.000000, -486.000000)" stroke="#868686" strokeWidth="2">
				  <g id="Group-20" transform="translate(1186.000000, 336.000000)">
					<g id="Group-11" transform="translate(50.000000, 113.000000)">
					  <g id="3844476_eye_see_show_view_watch_icon" transform="translate(456.000000, 38.000000)">
						<path d="M10,0 C5.33384615,0 1.38307692,2.93688889 0,7 C1.38307692,11.0631111 5.33384615,14 10,14 C14.6661538,14 18.6169231,11.0631111 20,7 C18.6169231,2.93688889 14.6661538,0 10,0 Z" id="XMLID_10_"></path>
						<circle id="XMLID_12_" cx="10" cy="7" r="4"></circle>
					  </g>
					</g>
				  </g>
				</g>
			  </g>
			</svg>
		)
	}
	
	return (
		<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_4_2)">
				<path fillRule="evenodd" clipRule="evenodd" d="M11 1C6.33385 1 2.38308 3.93689 1 8C2.38308 12.0631 6.33385 15 11 15C15.6662 15 19.6169 12.0631 21 8C19.6169 3.93689 15.6662 1 11 1Z" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<rect x="23.0098" y="-0.574295" width="1.61828" height="34.2114" transform="rotate(57.7015 23.0098 -0.574295)" fill="#868686"/>
			</g>
			<defs>
				<clipPath id="clip0_4_2">
					<rect width="22" height="16" fill="white"/>
				</clipPath>
			</defs>
		</svg>
	)
} 
