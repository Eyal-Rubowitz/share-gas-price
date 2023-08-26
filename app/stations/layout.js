export const metadata = {
  title: 'Stations layout',
  description: 'Station pages',
}

export default function SearchLayout({ children }) {
  return (
      <div>
        <div>hello station section</div>
        <section>
          {children} 
        </section>
      </div>
  )
}