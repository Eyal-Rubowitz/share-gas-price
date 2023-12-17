import { NextResponse } from 'next/server';

export async function GET() {
    // return getStationData();
    return NextResponse.json(getStationData());
}

export const getStationData = () => {
    return stationDB;
}

const stationDB = [
    {
        id: "01",
        name: "Paz Yellow Ligad",
        location: "32.12345,35.353535",
        image: "",
        gass_id: ""
    }, {
        id: "02",
        name: "Mika Ishpro Modi'in",
        location: "32.32323,35.55555",
        image: "",
        gass_id: ""
    }, {
        id: "03",
        name: "Sonol Shilat",
        location: "33.3333,35.98765",
        image: "",
        gass_id: ""
    }, {
        id: "04",
        name: "Dor Alon",
        location: "32.7878,35.7575",
        image: "",
        gass_id: ""
    },
    {
        id: "05",
        name: "Ten",
        location: "30.7878,30.7575",
        image: "",
        gass_id: ""
    }
];

export default stationDB;