export const metadata = {
  title: 'Stations layout',
  description: 'Station pages',
}

export default function SearchLayout({ children }) {
  return (
      <div className="background: bg-red-300">
        <div><h3>Hello station section</h3></div>
        <section>
          {children} 
        </section>
      </div>
  )
}