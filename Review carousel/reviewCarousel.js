let people = [
    {
        name:"Susan Smith",
        profession:"WEB DEVELOPER",
        description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
        +" Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        person_image:"webdev.jpg"},
    {
        name:"Anna Johnson",
        profession:"Web Designer",
        description:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle."
        +"Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        person_image:"webdesigner.jpg"},
    {
        name:"Peter Jones",
        profession:"INTERN",
        description:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit," 
        +"fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        person_image:"intern.jpg"},
    {
        name:"Bill Anderson",
        profession:"THE BOSS",
        description:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan."
         +" VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
         person_image:"boss.jpg"}
    ]
   

    let personImage = document.querySelector("#person-imageImportant");
    let personName = document.querySelector("#person-name");
    let personProfession = document.querySelector("#person-profession");
    let personDescription = document.querySelector("#person-description");
    const supriseBtn = document.querySelector("#random-person");
    const nextBtn = document.querySelector("#next-button");
    const previousBtn = document.querySelector("#previous-button");
    let pName = document.querySelector("#person-image");
    let index = 0;
    nextBtn.addEventListener("click",function() {
       index++; 
       if(index==people.length) 
        index=0;
       
        personImage.src = people[index].person_image;
        personName.innerText = people[index].name;
        personProfession.innerText = people[index].profession;
        personDescription.innerText = people[index].description;

    })

    previousBtn.addEventListener("click",function(){

        index--;
        if(index<=0) {
            if(index==-1)
                index=3;
        }
        personImage.src = people[index].person_image;
         personName.innerText = people[index].name;
         personProfession.innerText = people[index].profession;
         personDescription.innerText = people[index].description;
 
    })


    supriseBtn.addEventListener("click",function() {
       
        let randomIndex = Math.floor(Math.random()*people.length);
        while(randomIndex==index) {
            randomIndex = Math.floor(Math.random()*people.length);
        }
        index = randomIndex;
        personImage.src = people[index].person_image;
        personName.innerText = people[index].name;
        personProfession.innerText = people[index].profession;
        personDescription.innerText = people[index].description;
    })
