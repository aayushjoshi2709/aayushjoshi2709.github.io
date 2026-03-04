const projectCrousal = document.getElementById("project-crousal");
console.log(projectCrousal);
const projectData = fetch("./data/projects.json")
  .then((res) => res.json())
  .then((projectData) => {
    for (data of projectData) {
      technology_div = "";
      for (tech of data.tech) {
        technology_div += `
            <div class="p-2 rounded border-1 m-2">
                ${tech}
            </div>
        `;
      }
      projectCrousal.innerHTML += `
            <div class="flex-col shadow-lg rounded-xl p-6 w-sm border-1 space-between">
                <img class="w-full" src=${data.image || "./images/github.png"}>
                <div class="flex-row space-between flex-1">
                    <h3 class="text-2xl text-bold m-4">${data.name}</h3>
                    <p class="text-md line-clamp-3">${data.description}</p>
                    <div class="my-2 flex flex-wrap justify-center">
                        ${technology_div}
                    <div>
                    <div class="mt-2 justify-center w-100">
                        <a target="_blank" href="${data.github}">
                            <button class="text-xl m-4 transform hover:scale-110 transition duration-300 border-b-2 border-transparent hover:border-white">
                                Github Link
                            </button>
                        </a>

                        <a target="_blank" href="${data.live || data.github}">
                            <button class="text-xl m-4 transform hover:scale-110 transition duration-300 border-b-2 border-transparent hover:border-white">
                                Live Link
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
  });
