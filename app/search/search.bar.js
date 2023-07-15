import gassDB from "../../database/db";

export default function SearchBar() {
  console.log(gassDB)
  return (
    <div className="flex">
          <select>
            <option>place 1</option>
            <option>place 2</option>
            <option>place 3</option>
            <option>place 4</option>
          </select>
          <select>
            {gassDB.map(item => (
              <option key={item.full}>{item.full}</option>
            ))}
          </select>
          <input type="text" placeholder="search bar"></input>
    </div>
  );
}