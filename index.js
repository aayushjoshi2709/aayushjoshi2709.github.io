const projectCrousal = document.getElementById("project-crousal");
const projectData = fetch("./data/projects.json")
  .then((res) => res.json())
  .then((projectData) => {
    for (data of projectData) {
      technology_div = "";
      for (tech of data.tech) {
        technology_div += `
            <div class="p-1 px-4 rounded border-1 m-2 hover:bg-white hover:font-bold hover:text-black">
                ${tech}
            </div>
        `;
      }
      projectCrousal.innerHTML += `
            <div class="flex-col shadow-lg rounded-xl py-4 px-2 md:p-4 md:w-sm w-full border-1 space-between hover:border-blue-300">
                <img  class="aspect-[4/3] w-full object-contain" src=${data.image || "./images/github.png"}>
                <div class="flex-row space-between flex-1">
                    <h3 class="text-2xl text-bold m-4">${data.name}</h3>
                    <p class="text-md text-center">${data.description}</p>
                    <div class="my-3 flex flex-wrap justify-center">
                        ${technology_div}
                    <div>
                    <div class="mt-2 justify-center w-100">
                        <a target="_blank" href="${data.github}">
                            <button class="text-xl mx-4 transform hover:scale-110 transition duration-300 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300">
                                Github Link
                            </button>
                        </a>

                        <a target="_blank" href="${data.live || data.github}">
                            <button class="text-xl mx-4 transform hover:scale-110 transition duration-300 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-300">
                                Live Link
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
  });
