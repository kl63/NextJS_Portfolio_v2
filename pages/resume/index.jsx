import Color 	from '../../components/utils/page.colors.util'
import colors 		from '../../jsonData/resume/_colors.json'
import Resume from '../../components/resume/resume';


//
export default function ResumePage({}) {
	return (
		<>	
			<Color colors={colors} />	
			<Resume />
			
		</>
	)
}