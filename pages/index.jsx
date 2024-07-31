import Hero 		from '../components/homePage/hero'
import Looking 		from '../components/homePage/looking'
import About 		from '../components/homePage/homePage'
import Color 		from '../components/utils/page.colors.util'
import colors 		from '../jsonData/homePage/_colors.json'

export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<Looking /> 
			<About />
		</>
	);
}