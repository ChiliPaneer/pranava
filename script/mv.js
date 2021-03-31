/// Muisc Data

//import musicDataFile from "./data.js";

const mvData = {
  data: [
    {
      Title: "We Belong - Song",
      Description:
        "This beautiful song describing the mindset of mentally ill written by Dr.Uma Eyyunni was set to music by Srinivasa Bharadwaj Kishore (kiBaSri).  The song was performed by the Jacksonville and Tallahassee singers during the presentation of the musical - Nature the Magnificent, in Tallahassee, FL.",
      Date: "February 04, 2018",
      Location: "Tallahassee, FL",
      ytlink: "https://www.youtube.com/watch?v=SN0ooNAz6BI",
      videoID: "SN0ooNAz6BI",
    },
    {
      Title: "We Belong Song for Mother's Cry Inc",
      Description:
        "This beautiful song describing the mindset of mentally ill written by Dr.Uma Eyyunni was set to music by Srinivasa Bharadwaj Kishore (kiBaSri). This song was sung by Sravanti PanchAgnula and kiBaSrI.",
      Date: 2017,
      Location: "Jacksonville, Florida",
      ytlink: "https://www.youtube.com/watch?v=AphbfRanXt0",
      videoID: "AphbfRanXt0",
    },
    {
      Title: "We Belong Song for NAMI by Mother's Cry Inc",
      Description:
        "This song was recreated for National Alliance on Mental Illness, with lyrics written by Dr Uma Eyyuni, illustrations by the cartoonist Jayadev Babu and the Music, Orchestration and Presentation by Srinivasa Bharadwaj Kishore",
      Date: 2016,
      Location: "Jacksonville, Florida",
      ytlink: "https://www.youtube.com/watch?v=YmAzcVAPV0Q",
      videoID: "YmAzcVAPV0Q",
    },
    {
      Title: "sphaTikaliMgAkRtiM Song",
      Description:
        "This very beautiful song depicting Siva's tandavam written by Dr Uma Eyyunni was set to music and orchestrated by Srinivasa Bharadwaj Kishore. This version was sung by Srinivasa Bharadwaj Kishore and Sravanti Panchagnula.",
      Date: 2012,
      Location: "",
      ytlink: "https://www.youtube.com/watch?v=4olSxclr2Jo",
      videoID: "4olSxclr2Jo",
    },
    {
      Title: "AShADhaM_vaccEnadigO Song",
      Description:
        "This beautiful telugu folk song was performed at ATA-2012 convention in Atlanta. Lyrics are by Dr Uma Eyyunni and music and orchestration was by Srinivasa Bharadwaj Kishore",
      Date: "July 7, 2012",
      Location: "Atlanta, GA",
      ytlink: "https://www.youtube.com/watch?v=U5VO30itdHE",
      videoID: "U5VO30itdHE",
    },
    {
      Title:
        'punnami rElu - "kOlATam" song and vaccEyaMDi - comedy musical skit following the song',
      Description:
        'This beautiful kOlATam song written by Dr Uma Eyyunni was set to music and was orchestrated by Srinivasa Bharadwaj Kishore.    It was sung by Radhika Nori.\n\nThe musical skit "vaccEyaMDi" follows the song.   Participants are Drs Uma and Ram Eyyunni, Srinivasa and Surekha Kishore, Seema and Seema Kuravi.  Writing the script jointly along with Dr Uma, Srinivasa Bharadwaj Kishore has set this skit to music.',
      Date: 2006,
      Location: "Ugadi celebrations by TAJA, Jacksonville, FL",
      ytlink: "https://www.youtube.com/watch?v=JvjqEokuDYo",
      videoID: "JvjqEokuDYo",
    },
    {
      Title: "vannevannela gopakannelE",
      Description:
        "This song was written by Dr Uma Eyyunni and was set to music and orchestrated by Srinivasa Bharadwaj Kishore.  It was sung by Radhika Nori, Himabindu Janapati, Madhavi Mundrati, Subhadra Murthy, Sandhya Eswari, Sirisha Jakkala, Sushma Mukhirala.",
      Date: 2014,
      Location: "NATA in Atlanta, GA",
      ytlink: "https://www.youtube.com/watch?v=eHIS-c2QNCA",
      videoID: "eHIS-c2QNCA",
    },
  ],
};

function makeMV(mvData) {
  let mvShell = document.createElement("div");
  mvShell.setAttribute("class", "mv-shell");

  let mvText = document.createElement("div");
  mvText.setAttribute("class", "mv-text");

  let mvTitle = document.createElement("div");
  mvTitle.setAttribute("class", "mv-title");
  mvTitle.textContent = mvData.Title;

  let mvDate = document.createElement("div");
  mvDate.setAttribute("class", "mv-date");
  mvDate.textContent = mvData.Date;

  let mvDesc = document.createElement("div");
  mvDesc.setAttribute("class", "mv-desc");
  mvDesc.textContent = mvData.Description;

  let mvContainer = document.createElement("div");
  mvContainer.setAttribute("class", "mv-container");

  let mv = document.createElement("iframe");
  mv.setAttribute("width", "100%");
  mv.setAttribute("height", "240px");
  mv.setAttribute("style", "border-radius: 20px; padding: 10px");
  mv.setAttribute(
    "src",
    "https://www.youtube-nocookie.com/embed/" + mvData.videoID
  );
  mv.setAttribute("frameborder", "0");
  mv.setAttribute(
    "allow",
    "allow",
    "fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );

  mvContainer.appendChild(mv);

  mvText.appendChild(mvTitle);
  mvText.appendChild(mvDate);
  mvText.appendChild(mvDesc);

  mvShell.appendChild(mvText);
  mvShell.appendChild(mvContainer);

  return mvShell;
}

function populateMV() {
  let main = document.getElementById("mv-box");
  mvData.data.forEach((mv) => {
    main.appendChild(makeMV(mv));
  });
}

populateMV();
