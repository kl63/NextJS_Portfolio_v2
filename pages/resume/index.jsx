import Color 	from '../../components/utils/page.colors.util'
import ComingSoon from '../../components/sections/comingsoon'

import colors 		from '../../content/resume/_colors.json'
import settings 	from '../../content/_settings.json'
import Resume from '../../components/resume/resume';


//
export default function ResumePage({}) {
	return (
		<>	
			<Color colors={colors} />
			{/*<ComingSoon /> */}
			<Resume />
			
		</>
	)
}