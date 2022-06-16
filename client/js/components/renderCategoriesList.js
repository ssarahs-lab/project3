

export function renderCategoriesList(){

    page.innerHTML = ""

    let categoryNames = []
    let categoryImgURL = []

    axios
    .get("api/categories")
    .then((response) => {

        

        response.data.forEach((category)=> {

            let divCard = document.createElement('div');
            let categoryLink = document.createElement('a');
            let img = document.createElement('img');
            let habitContainer = document.createElement('div')

            
        

            divCard.classList.add("card")

            categoryNames.push(category.identities);
            categoryImgURL.push(category.image_related_identity_url)

            // console.log(categoryNames)
                
            page.appendChild(divCard)
        
            categoryLink.setAttribute('href', '#');
            categoryLink.innerHTML = category.identities;

            img.src = category.image_related_identity_url

            // let habits = 

            // habits.forEach((habit) => {
            //     habit.classList.add(`habit${category.identities_id}`)
            //     habitContainer.appendChild(habit)
            // })
            axios.get(`/api/categories/${category.identities_id}`)
                .then((response) => {
                    response.data.forEach((newHabit) => {
                        let paragraph = document.createElement('p')
                        let checkbox = document.createElement('div')
                        checkbox.innerHTML = `
                            <input type="checkbox" id="${category.identities_id}">
                        `
                        paragraph.classList.add('toggle-display')
                        paragraph.textContent = newHabit.habit
                        habitContainer.appendChild(paragraph)
                        paragraph.appendChild(checkbox)
                    })
                })


            divCard.appendChild(img)
            divCard.appendChild(categoryLink)
            divCard.appendChild(habitContainer)

            categoryLink.addEventListener('click', function(e) {
                e.preventDefault()
                console.log(response)
                let paragraph = habitContainer.querySelectorAll('p')
                paragraph.forEach(p => p.classList.toggle('toggle-display'))
                
                
            })

        })

    })

}

// function getHabits(id) {
//     console.log(`/api/categories/${id}`)
//     axios.get(`/api/categories/${id}`)
//     .then((response) => {
//         console.log(response)
//     })
    
// }