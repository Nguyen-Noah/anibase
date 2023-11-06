import trending from "../services/trendingAnime";

const ObjectDisplay = ({ trending }) => {
  return (
    <div>
      <h2>Object data</h2>
      <pre>{JSON.stringify(trending, null, 2)}</pre>
    </div>
  )
}

export default ObjectDisplay