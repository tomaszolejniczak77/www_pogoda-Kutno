fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.22&longitude=19.34&hourly=temperature_2m,precipitation_probability,precipitation,rain,snowfall,weathercode,pressure_msl,cloudcover,windspeed_10m,windspeed_120m,windgusts_10m&timezone=Europe%2FBerlin"
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    let zachmurzenie = res.hourly.cloudcover;
    let opady = res.hourly.precipitation;
    let prawdopodobneOpady = res.hourly.precipitation_probability;
    let cisnienie = res.hourly.pressure_msl;
    let deszcz = res.hourly.rain;
    let opadySniegu = res.hourly.snowfall;
    let temperatura = res.hourly.temperature_2m;
    let doba = res.hourly.time;
    let kodyPogody = res.hourly.weathercode;
    let porywyWiatru = res.hourly.windgusts_10m;
    let wiatrNa10m = res.hourly.windspeed_10m;
    let wiatrNa120m = res.hourly.windspeed_120m;

    let zachmurzenieJutro = " ";
    let opadyJutro = " ";
    let prawdopodobneOpadyJutro = " ";
    let cisnienieJutro = " ";
    let deszczJutro = " ";
    let opadySnieguJutro = " ";
    let temperaturaJutro = " ";
    let kodyPogodyJutro = " ";
    let porywyWiatruJutro = " ";
    let wiatrNa10mJutro = " ";
    let wiatrNa120mJutro = " ";

    zachmurzenieJutro = zachmurzenie.slice(24, 48);
    opadyJutro = opady.slice(24, 48);
    prawdopodobneOpadyJutro = prawdopodobneOpady.slice(24, 48);
    cisnienieJutro = cisnienie.slice(24, 48);
    deszczJutro = deszcz.slice(24, 48);
    opadySnieguJutro = opadySniegu.slice(24, 48);
    temperaturaJutro = temperatura.slice(24, 48);
    kodyPogodyJutro = kodyPogody.slice(24, 48);
    porywyWiatruJutro = porywyWiatru.slice(24, 48);
    wiatrNa10mJutro = wiatrNa10m.slice(24, 48);
    wiatrNa120mJutro = wiatrNa120m.slice(24, 48);

    let kodyPogodyDzis;
    let temperaturaDzis;
    let cisnienieDzis;

    let xValues = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      " 10",
      " 11",
      " 12",
      " 13",
      " 14",
      " 15",
      " 16",
      " 17",
      " 18",
      " 19",
      " 20",
      " 21",
      " 22",
      " 23",
    ];

    kodyPogodyDzis = kodyPogody.slice(0, 24);
    temperaturaDzis = temperatura.slice(0, 24);
    cisnienieDzis = cisnienie.slice(0, 24);

    let weatherNow = () => {
      let now = new Date();

      let hours = now.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      } else {
        hours = " " + hours;
      }

      let xValuesNow = xValues.indexOf(hours);

      let kodPogodyTeraz = kodyPogodyDzis[xValuesNow];
      let temperaturaTeraz = temperaturaDzis[xValuesNow];
      let cisnienieTeraz = cisnienieDzis[xValuesNow];

      console.log(kodPogodyTeraz);
      console.log(cisnienieTeraz);

      document.getElementById("temperaturaTeraz").innerHTML =
        temperaturaTeraz + "°C";
      document.getElementById("cisnienieTeraz").innerHTML =
        cisnienieTeraz + " hPa";

      let x;
      switch (kodPogodyTeraz) {
        case 61:
          x = '<i class="fa-solid fa-cloud-rain fa-xl"></i>';
          break;
        case 3:
          x = '<i class="fa-solid fa-cloud fa-xl"></i>';
          break;

        case 2:
          x = '<i class="fa-solid fa-cloud-sun fa-xl"></i>';
          break;

        case 1:
          x = '<i class="fa-solid fa-cloud-sun fa-xl"></i>';
          break;

        case 0:
          x = '<i class="fa-solid fa-sun fa-xl"></i>';
          break;

        case 71:
          x = '<i class="fa-regular fa-snowflake fa-xl"></i>';
          break;

        case 80:
          x = '<i class="fa-solid fa-cloud-showers-heavy fa-xl"></i>';
          break;

        case 85:
          x = '<i class="fa-regular fa-snowflake fa-xl"></i>';
          break;

        case 45:
          x = '<i class="fa-solid fa-smog fa-xl"></i>';
          break;

        case 48:
          x = '<i class="fa-solid fa-icicles fa-xl"></i>';
          break;

        case 77:
          x = '<i class="fa-regular fa-snowflake fa-xl"></i>';
          break;

        default:
          x = "No value found";
      }
      document.getElementById("kodPogody").innerHTML = x;
    };

    weatherNow();

    let yValuesTem = temperatura;
    let yValuesClo = zachmurzenie;
    let yValuesPre = cisnienie;
    let yValuesWin = wiatrNa10m;
    let yValuesWinG = porywyWiatru;
    let yValuesPrec = opady;
    let yValuesPrecPro = prawdopodobneOpady;
    let yValuesRai = deszcz;
    let yValuesSno = opadySniegu;
    let yValuesWin120 = wiatrNa120m;

    let yValuesTemTom = temperaturaJutro;
    let yValuesPreTom = cisnienieJutro;
    let yValuesWinTom = wiatrNa10mJutro;
    let yValuesWinGTom = porywyWiatruJutro;
    let yValuesPrecProTom = prawdopodobneOpadyJutro;
    let yValuesCloTom = zachmurzenieJutro;
    let yValuesRaiTom = deszczJutro;
    let yValuesSnoTom = opadySnieguJutro;
    let yValuesWin120Tom = wiatrNa120mJutro;

    let box1 = document.getElementById("h04");
    let box2 = document.getElementById("h12");
    let box3 = document.getElementById("h20");
    let box4 = document.getElementById("h04Tom");
    let box5 = document.getElementById("h12Tom");
    let box6 = document.getElementById("h20Tom");

    let weatherTodTom = () => {
      box1.innerHTML =
        "dziś 04:00" +
        "<br>" +
        "temperatura: " +
        yValuesTem[4] +
        "°C" +
        "<br>" +
        "ciśnienie: " +
        yValuesPre[4] +
        " hPa" +
        "<br>" +
        "porywy wiatru: " +
        yValuesWinG[4] +
        "km/h";

      box2.innerHTML =
        "dziś 12:00" +
        "<br>" +
        "temperatura: " +
        yValuesTem[12] +
        "°C" +
        "<br>" +
        "ciśnienie: " +
        yValuesPre[12] +
        " hPa" +
        "<br>" +
        "porywy wiatru: " +
        yValuesWinG[12] +
        "km/h";

      box3.innerHTML =
        "dziś 20:00" +
        "<br>" +
        "temperatura: " +
        yValuesTem[20] +
        "°C" +
        "<br>" +
        "ciśnienie: " +
        yValuesPre[20] +
        " hPa" +
        "<br>" +
        "porywy wiatru: " +
        yValuesWinG[20] +
        "km/h";

      box4.innerHTML =
        "jutro 04:00" +
        "<br>" +
        "temperatura: " +
        yValuesTemTom[4] +
        "°C" +
        "<br>" +
        "ciśnienie: " +
        yValuesPreTom[4] +
        " hPa" +
        "<br>" +
        "porywy wiatru: " +
        yValuesWinGTom[4] +
        "km/h";

      box5.innerHTML =
        "jutro 12:00" +
        "<br>" +
        "temperatura: " +
        yValuesTemTom[12] +
        "°C" +
        "<br>" +
        "ciśnienie: " +
        yValuesPreTom[12] +
        " hPa" +
        "<br>" +
        "porywy wiatru: " +
        yValuesWinGTom[12] +
        "km/h";

      box6.innerHTML =
        "jutro 20:00" +
        "<br>" +
        "temperatura: " +
        yValuesTemTom[20] +
        "°C" +
        "<br>" +
        "ciśnienie: " +
        yValuesPreTom[20] +
        " hPa" +
        "<br>" +
        "porywy wiatru: " +
        yValuesWinGTom[20] +
        "km/h";
    };

    weatherTodTom();

    new Chart("myChart1", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "green",
            data: yValuesTem,
            fill: false,
            label: "temperatura dziś - °C",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno dziś (24h)",
        },
      },
    });

    new Chart("myChart1Tom", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "green",
            data: yValuesTemTom,
            fill: false,
            label: "temperatura - °C",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno jutro (24h)",
        },
      },
    });

    new Chart("myChart2", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "blue",
            data: yValuesPre,
            fill: false,
            label: "ciśnienie - hPa",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno dziś (24h)",
        },
      },
    });

    new Chart("myChart2Tom", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "blue",
            data: yValuesPreTom,
            fill: false,
            label: "ciśnienie - hPa",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno jutro (24h)",
        },
      },
    });

    new Chart("myChart3", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "firebrick",
            data: yValuesWin,
            fill: false,
            label: "wiatr - km/h",
          },
          {
            borderColor: "red",
            data: yValuesWinG,
            fill: false,
            label: "porywy wiatru - km/h",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno dziś (24h)",
        },
      },
    });

    new Chart("myChart3Tom", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "firebrick",
            data: yValuesWinTom,
            fill: false,
            label: "wiatr - km/h",
          },
          {
            borderColor: "red",
            data: yValuesWinGTom,
            fill: false,
            label: "porywy wiatru - km/h",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno jutro (24h)",
        },
      },
    });

    new Chart("myChart4", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "darkmagenta",
            data: yValuesPrecPro,
            fill: false,
            label: "Prawdopodobieństwo opadów - %",
          },
          {
            borderColor: "red",
            data: yValuesClo,
            fill: false,
            label: "% zachmurzenia",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno dziś (24h)",
        },
      },
    });

    new Chart("myChart4Tom", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "darkmagenta",
            data: yValuesPrecProTom,
            fill: false,
            label: "Prawdopodobieństwo opadów - %",
          },
          {
            borderColor: "red",
            data: yValuesCloTom,
            fill: false,
            label: "% zachmurzenia",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno jutro (24h)",
        },
      },
    });

    new Chart("myChart5", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "darkmagenta",
            data: yValuesRai,
            fill: false,
            label: "opady deszczu - mm",
          },
          {
            borderColor: "darkblue",
            data: yValuesSno,
            fill: false,
            label: "opady śniegu - mm",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno dziś (24h)",
        },
      },
    });

    new Chart("myChart5Tom", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "darkmagenta",
            data: yValuesRaiTom,
            fill: false,
            label: "opady deszczu - mm",
          },
          {
            borderColor: "darkblue",
            data: yValuesSnoTom,
            fill: false,
            label: "opady śniegu - mm",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno jutro (24h)",
        },
      },
    });

    new Chart("myChart6", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "darkslategrey",
            data: yValuesWin120,
            fill: false,
            label: "wiatr na 120 metrach ponad grunt - km/h",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno dziś (24h)",
        },
      },
    });

    new Chart("myChart6Tom", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "darkslategrey",
            data: yValuesWin120Tom,
            fill: false,
            label: "wiatr na 120 metrach ponad grunt - km/h",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Kutno jutro (24h)",
        },
      },
    });
  });

let counter = () => {
  let today = new Date();

  let hours = today.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let seconds = today.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("watch").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  setTimeout(counter, 1000);
};

let day;
switch (new Date().getDay()) {
  case 0:
    day = "niedziela";
    break;
  case 1:
    day = "poniedziałek";
    break;
  case 2:
    day = "wtorek";
    break;
  case 3:
    day = "środa";
    break;
  case 4:
    day = "czwartek";
    break;
  case 5:
    day = "piątek";
    break;
  case 6:
    day = "sobota";
}
document.getElementById("dayOfWeek").innerHTML = "Dziś jest" + " " + day;
