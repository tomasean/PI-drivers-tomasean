const axios = require("axios");
require("dotenv").config();
const { getDriversFromDB, getAllDriversFromDB } = require ("./helpers/getDriversFromDB");
const testDrivers = [
    {
      id: 1,
      driverRef: "hamilton",
      number: 44,
      code: "HAM",
      name: {
        forename: "Lewis",
        surname: "Hamilton",
      },
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
        imageby:
          "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=52060566",
      },
      dob: "1985-01-07",
      nationality: "British",
      url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
      teams: "McLaren, Mercedes",
      description:
        "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history.",
    },
    {
      id: 2,
      driverRef: "heidfeld",
      number: "\\N",
      code: "HEI",
      name: {
        forename: "Nick",
        surname: "Heidfeld",
      },
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg/330px-Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg",
        imageby:
          "By https://www.flickr.com/photos/69527563@N05/ - https://www.flickr.com/photos/69527563@N05/48242681251/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80386033",
      },
      dob: "1977-05-10",
      nationality: "German",
      url: "https://en.wikipedia.org/wiki/Nick_Heidfeld",
      teams: "Prost, Sauber, Jordan,Williams,BMW Sauber,Renault",
      description:
        "Nick Lars Heidfeld (born 10 May 1977) is a German professional racing driver. Despite scoring regular podium finishes in 2005 with Williams, and in 2007 and 2008 with BMW Sauber, Heidfeld never won a race after debuting in Formula One in 2000. Heidfeld currently holds two Formula One records; most podium finishes without a Grand Prix win, and the most second-place finishes without a wi. In 2011, Heidfeld raced in Formula One for the Renault team as a replacement for the injured Robert Kubica, his former BMW Sauber teammate,before being replaced by Bruno Senna. He last drove for the Rebellion Racing team in the FIA World Endurance Championship and for Mahindra Racing Formula E Team in Formula E.",
    },
  ];
  
  module.exports = async (req, res) => {
    let name = null;
    let dataToSend = {};
    if (req.query) ({ name } = req.query);
    try {
      const { data } = await axios.get("http://localhost:5000/drivers");
      if (name) {
        dataToSend = data.filter((driver) =>
          driver.driverRef.toLowerCase().includes(name.toLowerCase())
        );
        const driversFromDB = await getDriversFromDB(name);
        if (driversFromDB !== undefined) {
          for(let i=0;i<driversFromDB.length;i++){
            driversFromDB[i].fromdatabase=true;
          }
          dataToSend = dataToSend.concat(driversFromDB);
        }
        dataToSend = dataToSend.slice(0, 15);
        if (dataToSend.length === 0) throw new Error("No driver found");
      } else {
        dataToSend = data; 
        const driversFromDB = await getAllDriversFromDB();
        if (driversFromDB !== undefined) {
          for(let i=0;i<driversFromDB.length;i++){
            driversFromDB[i].fromdatabase=true;
          }
          dataToSend = dataToSend.concat(driversFromDB);
        }
  
    }
      for (let i = 0; i < dataToSend.length; i++) {
        if (!dataToSend[i].image.hasOwnProperty("url") || dataToSend[i].image.url.length<2) {
          dataToSend[i].image.url = process.env.DEFAULT_DRIVER_IMAGE;
        }
      }
      return res.status(200).json(dataToSend);
    } catch (error) {
      if(error.message==="No driver found")
        return res.status(404).json({error: error.message})
  
      return res.status(500).json({ error: error.message });
    }
  };