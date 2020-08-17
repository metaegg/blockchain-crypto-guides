import Link from 'next-translate/Link'
import Container from '../Container'
import Card from '../Card'
import Slider from '../Slider/Slider'

export default function GuideNext({ list }) {
  if (!list || !list.length) {
    return null
  }

  return (
    <div className="Guide-next-wrap">
      <Container className="Container-banner" clipped={false}>
        <div className="Guide-next">
          <div className="Guide-next-title">
            Next Guides
          </div>
          <Slider slidesToScroll={4} slidesToShow={4}>
            {list.map((item, i) =>
              <Link key={i} href="/[lang]/guide/[...slug]" as={`/guide/${item.slug}`}>
                <a className="Guide-next-card">
                  <Card title={item.title} date={item.date} image={item.image} />
                </a>
              </Link>
            )}
          </Slider>
        </div>
      </Container>
    </div>
  )
}
