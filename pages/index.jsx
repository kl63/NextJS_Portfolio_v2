import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/introduction'
import About 		from '../components/about/about'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'
import Introduction from '../components/sections/index/introduction'


export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<Introduction /> 
			<About />
			<FeaturedProjects />
		</>
	);
}