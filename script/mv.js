/// Muisc Data

//import musicDataFile from "./data.js";

const mvData = {
    data: [
        {
            Title: "Nature the Magnificent - Musical performed in Jacksonville, FL Subhakaram",
            Description: "This is the video of “Nature - the magnificent”, a musical which turned into a magnum opus surpassing all expectations of creators with all the performers excelling to their capacity. With dances in five forms, over 40 dancers and 20 musicians from three different cities in two states, and about 40 support crew, this musical was staged in Jacksonville, FL on Feb’03, 2018.        Song lyrics were by Dr.Uma Eyyunni, Concept, Script, Music and Direction was by Srinivasa Bharadwaj Kishore.        Intended from the beginning to be a fundraiser for relief of hurricane victims of Puerto Rico, donations are routed to the beneficiaries via Habitat for Humanity, Puerto Rico.",
            Date: "February 03, 2018",
            Location: "Jacksonville, Florida",
            ytlink: "https://www.youtube.com/watch?v=mqseUISxKS8",
            videoID: "mqseUISxKS8",

        },
        {

            Title: "Nature the Magnificent - Musical performed in Jacksonville, FL Subhakaram",
            Description: "This is the video of “Nature - the magnificent”, a musical which turned into a magnum opus surpassing all expectations of creators with all the performers excelling to their capacity. With dances in five forms, over 40 dancers and 20 musicians from three different cities in two states, and about 40 support crew, this musical was staged in Jacksonville, FL on Feb’03, 2018.        Song lyrics were by Dr.Uma Eyyunni, Concept, Script, Music and Direction was by Srinivasa Bharadwaj Kishore.        Intended from the beginning to be a fundraiser for relief of hurricane victims of Puerto Rico, donations are routed to the beneficiaries via Habitat for Humanity, Puerto Rico.",
            Date: "February 03, 2018",
            Location: "Jacksonville, Florida",
            ytlink: "https://www.youtube.com/watch?v=mqseUISxKS8",
            videoID: "mqseUISxKS8",
        },
        {

            Title: "Nature the Magnificent - Musical performed in Jacksonville, FL Subhakaram",
            Description: "This is the video of “Nature - the magnificent”, a musical which turned into a magnum opus surpassing all expectations of creators with all the performers excelling to their capacity. With dances in five forms, over 40 dancers and 20 musicians from three different cities in two states, and about 40 support crew, this musical was staged in Jacksonville, FL on Feb’03, 2018.        Song lyrics were by Dr.Uma Eyyunni, Concept, Script, Music and Direction was by Srinivasa Bharadwaj Kishore.        Intended from the beginning to be a fundraiser for relief of hurricane victims of Puerto Rico, donations are routed to the beneficiaries via Habitat for Humanity, Puerto Rico.",
            Date: "February 03, 2018",
            Location: "Jacksonville, Florida",
            ytlink: "https://www.youtube.com/watch?v=mqseUISxKS8",
            videoID: "mqseUISxKS8",
        },
    ],
}



function makeMV(mvData) {
    let mvShell = document.createElement("div");
    mvShell.setAttribute("class", "mv-shell");

    let mvText = document.createElement("div");
    mvText.setAttribute("class", "mv-text");

    let mvTitle = document.createElement("div");
    mvTitle.setAttribute("class", "mv-title");
    mvTitle.textContent = mvData.Title

    let mvDate = document.createElement("div");
    mvDate.setAttribute("class", "mv-date");
    mvDate.textContent = mvData.Date

    let mvDesc = document.createElement("div");
    mvDesc.setAttribute("class", "mv-desc");
    mvDesc.textContent = mvData.Description

    let mvContainer = document.createElement("div");
    mvContainer.setAttribute("class", "mv-container");

    let mv = document.createElement("iframe");
    mv.setAttribute("width", "100%");
    mv.setAttribute("height", "100%");
    mv.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + mvData.videoID);
    mv.setAttribute("frameborder", "0");
    mv.setAttribute("allow", "allow", "fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");

    mvContainer.appendChild(mv);

    mvText.appendChild(mvTitle);
    mvText.appendChild(mvDate);
    mvText.appendChild(mvDesc);

    mvShell.appendChild(mvText);
    mvShell.appendChild(mvContainer);

    return mvShell;


}


function populateMV() {
    let main = document.getElementById("content");
    mvData.data.forEach((mv) => {
        main.appendChild(makeMV(mv));
    });
}

populateMV();

