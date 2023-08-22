import { GetGassDB } from "../../database/gassDB";
// import stationDB from "../api/database/route";
import { getStationData } from '../api/database/route';

export default async function SearchBar() {

  const stationDB = getStationData();

  console.log(stationDB);
  return (
    <div className="flex">
          <h2>Share Prices App</h2>
          <select>
            {stationDB.map(station => (
              <option key={station.id}>{station.name}</option>
            ))}
          </select>
          <select>
            {GetGassDB().map(item => (
              <option key={item.id}>{item.full.type}</option>
            ))}
          </select>
          <input type="text" placeholder="search bar"></input>
    </div>
  );
}