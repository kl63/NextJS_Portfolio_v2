import Color from '../../components/utils/page.colors.util'
import colors from '../../jsonData/chromePage/_colors.json'
import LandingContent from '../../components/chromePage/chromePage'

// 
export default function ChromeLandingPage({}) {
	return (
		<>	
			<Color colors={colors} />	
			<LandingContent />
		</>
	)
}
