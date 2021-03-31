/// Muisc Data

//import musicDataFile from "./data.js";

const mvData = {
  data: [
    {
      Title: "Nature the Magnificent - Musical performed in Jacksonville, FL",
      Description:
        "“Nature - the magnificent”, is a musical which turned into a magnum opus surpassing all expectations of the creators with all the performers excelling in their role.  This musical was conceived and produced as a fundraiser for the relief of hurricane victims of Puerto Rico, with the donations routed to the beneficiaries via Habitat for Humanity, Puerto Rico.\n\nThe production involved dances in five different forms, with over 40 dancers and 20 musicians from three different cities in two states in the US.  With support from about 40 crew members, this musical was staged in Jacksonville, FL on 3rd February, 2018.\n\nLyrics for the songs were written by Dr. Uma Eyyunni.\nConcept, Script, Music and Direction was by Srinivasa Bharadwaj Kishore.",
      Date: "3-Feb-18",
      Location: "Jacksonville, Florida",
      ytlink: "https://www.youtube.com/watch?v=mqseUISxKS8",
      videoID: "mqseUISxKS8",
    },
    {
      Title: "Nature the Magnificent - Musical performed in Tallahassee, FL",
      Description:
        "“Nature - the magnificent”, is a musical which turned into a magnum opus surpassing all expectations of the creators with all the performers excelling in their role.  This musical was conceived and produced as a fundraiser for the relief of hurricane victims of Puerto Rico, with the donations routed to the beneficiaries via Habitat for Humanity, Puerto Rico.\n\nThe production involved dances in five different forms, with over 40 dancers and 20 musicians from three different cities in two states in the US.  With support from about 40 crew members, this musical was staged in Tallahassee, FL on 4th February, 2018.\n\nLyrics for the songs were written by Dr. Uma Eyyunni.\nConcept, Script, Music and Direction was by Srinivasa Bharadwaj Kishore.",
      Date: "4-Feb-18",
      Location: "Jacksonville, Florida",
      ytlink: "https://www.youtube.com/watch?v=nJZyOOFD0f0&t=493s",
      videoID: "nJZyOOFD0f0",
    },
    {
      Title: "Neeharika Musical",
      Description:
        'Neeharika" a dance ballet based on the five elements - Earth, Sun, Moon, Wind and Water was produced and presented as a dance ballet in Tallahassee and Tampa, Florida in 2008.  This musical was produced as a fundraiser for the relief of hurricane Katrina victims.  This video is a part from Scene-1 of the dance ballet "Neeharika" presented at Tallahassee. \n\nLyrics for the musical are written by Dr Uma Eyyunni.   \nMusic and orchestration was by Srinivasa Bharadwaj Kishore.',
      Date: 2008,
      Location: "Tallahassee, Florida",
      ytlink: "https://www.youtube.com/watch?v=T3Ws6Yzj9LI",
      videoID: "T3Ws6Yzj9LI",
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
